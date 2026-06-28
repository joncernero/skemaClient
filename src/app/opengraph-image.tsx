import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Black Wren Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: 80,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-2px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Black Wren Digital
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#3b82f6",
          textAlign: "center",
        }}
      >
        Fast, modern websites &amp; apps for businesses
      </div>
    </div>,
    { ...size },
  );
}
