import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const CELLS = ["#fde047", "#4ade80", "#60a5fa", "#c084fc"];

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          padding: 2,
          gap: 2,
          background: "#f9fafb",
          borderRadius: 6,
        }}
      >
        {CELLS.map((color) => (
          <div
            key={color}
            style={{
              width: 11,
              height: 11,
              background: color,
              borderRadius: 2,
            }}
          />
        ))}
      </div>
    ),
    { ...size }
  );
}
