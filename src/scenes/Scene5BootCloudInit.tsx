import React from "react";
import { AbsoluteFill } from "remotion";
import { SceneHeader } from "../components/SceneHeader";
import { DiagramBox } from "../components/DiagramBox";
import { ConnectorArrow } from "../components/ConnectorArrow";

export const Scene5BootCloudInit: React.FC = () => {
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
        step={5}
        totalSteps={6}
        title="Linux Kernel Boot & cloud-init"
        subtitle="The VM powers on, boots Linux, and cloud-init fetches your SSH public key from the Instance Metadata Service (IMDSv2)."
        accentColor="#FBBF24"
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
          badge="Boot Sequence"
          title="UEFI -> GRUB -> Kernel"
          subtitle="Linux kernel mounts /dev/nvme0n1p1 and starts systemd (PID 1)"
          delaySeconds={0.4}
          accentColor="#FBBF24"
          width={295}
        />

        <ConnectorArrow delaySeconds={0.9} label="IMDSv2" color="#FBBF24" />

        <DiagramBox
          badge="169.254.169.254"
          title="Metadata Service"
          subtitle="cloud-init requests /latest/meta-data/public-keys/0/openssh-key"
          delaySeconds={1.2}
          accentColor="#38BDF8"
          width={315}
        />

        <ConnectorArrow delaySeconds={1.8} label="Write Key" color="#38BDF8" />

        <DiagramBox
          badge="OS Config"
          title="authorized_keys"
          subtitle="Writes public key to /home/ec2-user/.ssh/authorized_keys & runs user-data"
          delaySeconds={2.1}
          accentColor="#34D399"
          width={305}
        />
      </div>

      <div
        style={{
          backgroundColor: "#1E293B",
          borderLeft: "4px solid #FBBF24",
          padding: "14px 20px",
          borderRadius: 10,
          color: "#E2E8F0",
          fontSize: 16,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        curl -H &quot;X-aws-ec2-metadata-token: $TOKEN&quot; http://169.254.169.254/latest/meta-data/public-keys/0/openssh-key
      </div>
    </AbsoluteFill>
  );
};
