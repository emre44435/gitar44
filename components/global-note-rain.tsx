import { assetPath } from "@/lib/paths";

export function GlobalNoteRain() {
  return (
    <div className="note-rain-stage" aria-hidden="true">
      <div className="note-rain-poster" style={{ backgroundImage: `url("${assetPath("/video-posters/note-rain.png")}")` }} />
      <video className="note-rain-video" muted autoPlay loop playsInline preload="metadata" poster={assetPath("/video-posters/note-rain.png")}>
        <source src={assetPath("/videos/note-rain.mp4")} type="video/mp4" media="(min-width: 768px) and (prefers-reduced-motion: no-preference)" />
      </video>
      <div className="note-rain-depth" />
      <div className="note-rain-veil" />
    </div>
  );
}
