import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at 68% 24%, #2A265E, #0A0D1A 62%)", color: "#F7F5F2" }}>
      <div style={{ width: 330, height: 330, display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #F79089", borderRadius: "50%", background: "linear-gradient(145deg, #FC3A30, #2A265E)", boxShadow: "0 30px 80px rgba(0,0,0,.5)", fontSize: 138, fontWeight: 800, letterSpacing: -14 }}>DG</div>
    </div>,
    size,
  );
}
