"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/paths";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export function GlobalNoteRain() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const [loadVideo, setLoadVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData;
    if (reduceMotion || saveData) return;

    const timer = window.setTimeout(() => setLoadVideo(true), 450);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loadVideo) return;

    video.playbackRate = 0.82;
    const onVisibilityChange = () => {
      if (document.hidden) video.pause();
      else void video.play().catch(() => undefined);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    void video.play().catch(() => undefined);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [loadVideo]);

  return (
    <div className="note-rain-stage" aria-hidden="true">
      <div
        className="note-rain-poster"
        style={{ backgroundImage: `url("${assetPath("/video-posters/note-rain.png")}")` }}
      />
      {loadVideo && !reduceMotion && (
        <video
          ref={videoRef}
          className={`note-rain-video${playing ? " is-playing" : ""}`}
          src={assetPath("/videos/note-rain.mp4")}
          muted
          loop
          playsInline
          preload="metadata"
          poster={assetPath("/video-posters/note-rain.png")}
          onCanPlay={() => setPlaying(true)}
        />
      )}
      <div className="note-rain-depth" />
      <div className="note-rain-veil" />
    </div>
  );
}
