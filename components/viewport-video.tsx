"use client";

import { useEffect, useRef } from "react";
import { SiteImage } from "@/components/site-image";
import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

export function ViewportVideo({ src, poster, alt, className }: { src: string; poster: string; alt: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useHydratedReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || reduceMotion) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.src) {
          video.src = assetPath(src);
          video.load();
        }
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { rootMargin: "240px" });

    observer.observe(container);
    return () => observer.disconnect();
  }, [reduceMotion, src]);

  return (
    <div ref={containerRef} className={cn("viewport-video", className)}>
      <SiteImage src={poster} alt={alt} fill sizes="100vw" className="viewport-video-poster object-cover" />
      <video ref={videoRef} className="viewport-video-media" muted loop playsInline preload="none" poster={assetPath(poster)} onCanPlay={(event) => event.currentTarget.classList.add("is-ready")} />
    </div>
  );
}
