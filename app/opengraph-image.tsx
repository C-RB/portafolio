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
          background: "linear-gradient(135deg, #09090b 0%, #0f1b3d 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2563eb",
            borderRadius: 26,
            fontSize: 62,
            marginBottom: 48,
          }}
        >
          CR
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.1 }}>Camilo Rojas Baeza</div>
        <div style={{ fontSize: 38, color: "#93c5fd", marginTop: 20 }}>
          Ingeniero en Informática · Desarrollador Full-Stack
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 48 }}>
          camilo-rojas.dev
        </div>
      </div>
    ),
    size,
  );
}
