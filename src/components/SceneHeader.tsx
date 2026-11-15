import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface SceneHeaderProps {
  step: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  accentColor?: string;
}

export const SceneHeader: React.FC<SceneHeaderProps> = ({
  step,
  totalSteps,
  title,
  subtitle,
  accentColor = "#FF9900",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const translateY = interpolate(frame, [0, 0.5 * fps], [-18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        opacity,
        translate: `0px ${translateY}px`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            backgroundColor: accentColor,
            color: "#0F172A",
            fontWeight: 800,
            fontSize: 15,
            padding: "4px 12px",
            borderRadius: 999,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Step {step} / {totalSteps}
        </span>
        <span
          style={{
            color: "#94A3B8",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          AWS EC2 Launch Lifecycle
        </span>
      </div>
      <h1
        style={{
          margin: 0,
          fontSize: 40,
          fontWeight: 800,
          color: "#F8FAFC",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: 20,
          color: "#CBD5E1",
          lineHeight: 1.4,
          maxWidth: 920,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};
