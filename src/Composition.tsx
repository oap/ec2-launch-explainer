import React from "react";
import {
  AbsoluteFill,
  Composition,
  Series,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Scene1LaunchApi } from "./scenes/Scene1LaunchApi";
import { Scene2PlacementNitro } from "./scenes/Scene2PlacementNitro";
import { Scene3EbsAmi } from "./scenes/Scene3EbsAmi";
import { Scene4VpcNetworking } from "./scenes/Scene4VpcNetworking";
import { Scene5BootCloudInit } from "./scenes/Scene5BootCloudInit";
import { Scene6SshReady } from "./scenes/Scene6SshReady";

const SCENE_DURATION_SECONDS = 9;
const TOTAL_SCENES = 6;

export const EC2_LAUNCH_CONFIG = {
  fps: 30,
  width: 1280,
  height: 720,
  durationInFrames: TOTAL_SCENES * SCENE_DURATION_SECONDS * 30,
} as const;

const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = Math.min(1, Math.max(0, frame / durationInFrames));

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 6,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          backgroundColor: "#FF9900",
        }}
      />
    </div>
  );
};

export const EC2LaunchExplainer: React.FC = () => {
  const { fps } = useVideoConfig();
  const sceneFrames = SCENE_DURATION_SECONDS * fps;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0F172A" }}>
      <Series>
        <Series.Sequence durationInFrames={sceneFrames}>
          <Scene1LaunchApi />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sceneFrames}>
          <Scene2PlacementNitro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sceneFrames}>
          <Scene3EbsAmi />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sceneFrames}>
          <Scene4VpcNetworking />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sceneFrames}>
          <Scene5BootCloudInit />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sceneFrames}>
          <Scene6SshReady />
        </Series.Sequence>
      </Series>
      <ProgressBar />
    </AbsoluteFill>
  );
};

export const MyComposition: React.FC = () => {
  return (
    <Composition
      id="EC2LaunchExplainer"
      component={EC2LaunchExplainer}
      durationInFrames={EC2_LAUNCH_CONFIG.durationInFrames}
      fps={EC2_LAUNCH_CONFIG.fps}
      width={EC2_LAUNCH_CONFIG.width}
      height={EC2_LAUNCH_CONFIG.height}
    />
  );
};
