import { ImageResponse } from "next/og";

export const alt = "Camilo Rojas Baeza | Ingeniero en Informática";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#000000",
          color: "white",
        }}
      >
        <div style={{ fontSize: 76, lineHeight: 1.1 }}>Camilo Rojas Baeza</div>
        <div style={{ fontSize: 38, color: "#8e8e93", marginTop: 20 }}>
          Ingeniero en Informática · Desarrollador Full-Stack
        </div>
        <div style={{ fontSize: 28, color: "#5a5a60", marginTop: 48 }}>
          camilo-rojas.dev
        </div>
      </div>
    ),
    size,
  );
}
