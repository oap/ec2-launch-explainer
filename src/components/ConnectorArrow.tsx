import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface ConnectorArrowProps {
  delaySeconds?: number;
  label?: string;
  color?: string;
  width?: number;
}

export const ConnectorArrow: React.FC<ConnectorArrowProps> = ({
  delaySeconds = 0.6,
  label,
  color = "#FF9900",
  width = 90,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const startFrame = delaySeconds * fps;

  const progress = interpolate(frame, [startFrame, startFrame + 0.35 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 1, 0.5, 1),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        width,
        opacity: progress,
      }}
    >
      {label && (
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#CBD5E1",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      )}
      <svg width={width} height={24} viewBox={`0 0 ${width} 24`}>
        <line
          x1={4}
          y1={12}
          x2={4 + (width - 18) * progress}
          y2={12}
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
        />
        {progress > 0.7 && (
          <polygon
            points={`${width - 14},5 ${width - 2},12 ${width - 14},19`}
            fill={color}
          />
        )}
      </svg>
    </div>
  );
};
