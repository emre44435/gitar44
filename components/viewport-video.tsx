"use client";

import { useEffect, useRef } from "react";
import { SiteImage } from "@/components/site-image";
import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

export function ViewportVideo({ src, mobileSrc, poster, alt, className, desktopOnly = false, forceMotion = false }: { src: string; mobileSrc?: string; poster: string; alt: string; className?: string; desktopOnly?: boolean; forceMotion?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useHydratedReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!container || !video || (reduceMotion && !forceMotion) || (desktopOnly && isMobile)) return;
    const resolvedSrc = isMobile && mobileSrc ? mobileSrc : src;
    const play = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => undefined);
    };
    const retry = () => {
      const rect = container.getBoundingClientRect();
      if (!document.hidden && rect.bottom > 0 && rect.top < window.innerHeight) play();
    };
    document.addEventListener("touchstart", retry, { passive: true });
    document.addEventListener("visibilitychange", retry);
    video.addEventListener("canplay", retry);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.src) {
          video.src = assetPath(resolvedSrc);
          video.load();
        }
        play();
      } else {
        video.pause();
      }
    }, { rootMargin: "240px" });

    observer.observe(container);
    return () => {
      observer.disconnect();
      document.removeEventListener("touchstart", retry);
      document.removeEventListener("visibilitychange", retry);
      video.removeEventListener("canplay", retry);
      video.pause();
    };
  }, [desktopOnly, forceMotion, mobileSrc, reduceMotion, src]);

  return (
    <div ref={containerRef} className={cn("viewport-video", className)}>
      <SiteImage src={poster} alt={alt} fill sizes="100vw" className="viewport-video-poster object-cover" />
      <video ref={videoRef} className="viewport-video-media" autoPlay muted loop playsInline preload="none" poster={assetPath(poster)} onCanPlay={(event) => event.currentTarget.classList.add("is-ready")} />
    </div>
  );
}
