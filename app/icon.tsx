import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563eb",
          color: "white",
          fontSize: 50,
          fontWeight: 700,
          letterSpacing: -2,
          borderRadius: 20,
        }}
      >
        CR
      </div>
    ),
    size,
  );
}
