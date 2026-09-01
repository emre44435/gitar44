"use client";

import { useEffect, useRef } from "react";
import { Guitar } from "lucide-react";
import { SiteImage } from "@/components/site-image";
import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

type FrameVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (callback: () => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

type ChromaKeyVideoProps = {
  src: string;
  fallbackImage?: string;
  fallbackAlt?: string;
  keyColor: [number, number, number];
  similarity?: number;
  smoothness?: number;
  eager?: boolean;
  className?: string;
};

const vertexShader = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform sampler2D u_texture;
  uniform vec3 u_keyColor;
  uniform float u_similarity;
  uniform float u_smoothness;
  varying vec2 v_texCoord;
  void main() {
    vec4 source = texture2D(u_texture, v_texCoord);
    float distanceToKey = distance(source.rgb, u_keyColor);
    float alpha = smoothstep(u_similarity, u_similarity + u_smoothness, distanceToKey);
    float spill = 1.0 - smoothstep(u_similarity, u_similarity + u_smoothness * 1.7, distanceToKey);
    float neutral = dot(source.rgb, vec3(0.299, 0.587, 0.114));
    vec3 cleaned = mix(source.rgb, vec3(neutral), spill * 0.42);
    gl_FragColor = vec4(cleaned * alpha, alpha);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ChromaKeyVideo({ src, fallbackImage, fallbackAlt = "", keyColor, similarity = 0.27, smoothness = 0.17, eager = false, className }: ChromaKeyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<FrameVideo>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useHydratedReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!container || !video || !canvas || reduceMotion) return;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true });
    if (!gl) return;

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positionBuffer = gl.createBuffer();
    const textureBuffer = gl.createBuffer();
    const texture = gl.createTexture();
    if (!positionBuffer || !textureBuffer || !texture) return;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), gl.STATIC_DRAW);
    const textureLocation = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(textureLocation);
    gl.vertexAttribPointer(textureLocation, 2, gl.FLOAT, false, 0, 0);

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.uniform3fv(gl.getUniformLocation(program, "u_keyColor"), keyColor);
    gl.uniform1f(gl.getUniformLocation(program, "u_similarity"), similarity);
    gl.uniform1f(gl.getUniformLocation(program, "u_smoothness"), smoothness);

    let visible = eager;
    let frameHandle = 0;
    let animationHandle = 0;
    let started = false;

    const renderFrame = () => {
      if (!visible || video.paused || video.ended) return;
      if (video.readyState >= 2) {
        const width = Math.min(video.videoWidth || 1280, 1280);
        const height = Math.round(width * ((video.videoHeight || 720) / (video.videoWidth || 1280)));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        canvas.classList.add("is-ready");
        container.classList.add("is-ready");
      }

      if (video.requestVideoFrameCallback) frameHandle = video.requestVideoFrameCallback(renderFrame);
      else animationHandle = window.requestAnimationFrame(renderFrame);
    };

    const start = () => {
      visible = true;
      if (!video.src) video.src = assetPath(src);
      void video.play().then(() => {
        if (!started) {
          started = true;
          renderFrame();
        }
      }).catch(() => undefined);
    };

    const stop = () => {
      visible = false;
      video.pause();
    };

    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting ? start() : stop(), { rootMargin: "180px" });
    observer.observe(container);
    if (eager) start();

    return () => {
      observer.disconnect();
      if (video.cancelVideoFrameCallback && frameHandle) video.cancelVideoFrameCallback(frameHandle);
      if (animationHandle) window.cancelAnimationFrame(animationHandle);
      video.pause();
      gl.deleteTexture(texture);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(textureBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, [eager, keyColor, reduceMotion, similarity, smoothness, src]);

  return (
    <div ref={containerRef} className={cn("chroma-video", className)}>
      {fallbackImage ? <SiteImage src={fallbackImage} alt={fallbackAlt} fill priority={eager} sizes="(max-width: 768px) 92vw, 52vw" className="chroma-video-fallback object-cover" /> : <div className="chroma-video-placeholder" aria-hidden="true"><Guitar /></div>}
      <video ref={videoRef} className="chroma-video-source" muted loop playsInline preload={eager ? "metadata" : "none"} src={eager ? assetPath(src) : undefined} tabIndex={-1} />
      <canvas ref={canvasRef} className="chroma-video-canvas" />
    </div>
  );
}
