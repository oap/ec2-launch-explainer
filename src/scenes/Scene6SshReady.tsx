import React from "react";
import { AbsoluteFill } from "remotion";
import { SceneHeader } from "../components/SceneHeader";
import { DiagramBox } from "../components/DiagramBox";
import { ConnectorArrow } from "../components/ConnectorArrow";

export const Scene6SshReady: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0F172A",
        padding: "54px 64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <SceneHeader
        step={6}
        totalSteps={6}
        title="sshd Listening & SSH Handshake"
        subtitle="systemd starts sshd on TCP port 22, EC2 transitions to 'running', and your SSH client authenticates with your private key."
        accentColor="#34D399"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
        }}
      >
        <DiagramBox
          badge="Your Laptop"
          title="ssh -i key.pem"
          subtitle="Sends TCP SYN to Public IP:22; signs challenge with local private key"
          delaySeconds={0.4}
          accentColor="#FF9900"
          width={295}
        />

        <ConnectorArrow delaySeconds={0.9} label="TCP + TLS/SSH" color="#FF9900" />

        <DiagramBox
          badge="EC2 Instance"
          title="sshd (Port 22)"
          subtitle="Verifies signature against ~/.ssh/authorized_keys"
          delaySeconds={1.2}
          accentColor="#38BDF8"
          width={295}
        />

        <ConnectorArrow delaySeconds={1.8} label="Authenticated" color="#34D399" />

        <DiagramBox
          badge="Ready!"
          title="Interactive Shell"
          subtitle="[ec2-user@ip-10-0-1-42 ~]$ — You are connected!"
          delaySeconds={2.1}
          accentColor="#34D399"
          width={310}
        />
      </div>

      <div
        style={{
          backgroundColor: "#064E3B",
          borderLeft: "4px solid #34D399",
          padding: "14px 20px",
          borderRadius: 10,
          color: "#ECFDF5",
          fontSize: 16,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        $ ssh -i my-key.pem ec2-user@54.123.45.67  # Connected in ~20-45 seconds
      </div>
    </AbsoluteFill>
  );
};
