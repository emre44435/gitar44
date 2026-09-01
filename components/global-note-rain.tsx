import { assetPath } from "@/lib/paths";

export function GlobalNoteRain() {
  return (
    <div className="note-rain-stage" aria-hidden="true">
      <div
        className="note-rain-poster"
        style={{ backgroundImage: `url("${assetPath("/video-posters/note-rain.png")}")` }}
      />
      <video
        className="note-rain-video"
        src={assetPath("/videos/note-rain.mp4")}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        poster={assetPath("/video-posters/note-rain.png")}
      />
      <div className="note-rain-depth" />
      <div className="note-rain-veil" />
    </div>
  );
}
