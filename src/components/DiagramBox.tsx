import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface DiagramBoxProps {
  title: string;
  subtitle?: string;
  badge?: string;
  delaySeconds?: number;
  accentColor?: string;
  width?: number | string;
  children?: React.ReactNode;
}

export const DiagramBox: React.FC<DiagramBoxProps> = ({
  title,
  subtitle,
  badge,
  delaySeconds = 0.3,
  accentColor = "#38BDF8",
  width = 280,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const startFrame = delaySeconds * fps;

  const opacity = interpolate(frame, [startFrame, startFrame + 0.4 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scale = interpolate(frame, [startFrame, startFrame + 0.45 * fps], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.spring({ damping: 18 }),
  });

  return (
    <div
      style={{
        width,
        backgroundColor: "#1E293B",
        border: `2px solid ${accentColor}`,
        borderRadius: 16,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
        opacity,
        scale: `${scale}`,
      }}
    >
      {badge && (
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: 12,
            fontWeight: 700,
            color: accentColor,
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            padding: "3px 9px",
            borderRadius: 6,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </span>
      )}
      <div
        style={{
          fontSize: 21,
          fontWeight: 700,
          color: "#F8FAFC",
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            fontSize: 15,
            color: "#94A3B8",
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      )}
      {children}
    </div>
  );
};
