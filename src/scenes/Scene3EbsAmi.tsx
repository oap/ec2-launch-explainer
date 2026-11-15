import React from "react";
import { AbsoluteFill } from "remotion";
import { SceneHeader } from "../components/SceneHeader";
import { DiagramBox } from "../components/DiagramBox";
import { ConnectorArrow } from "../components/ConnectorArrow";

export const Scene3EbsAmi: React.FC = () => {
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
        step={3}
        totalSteps={6}
        title="Root EBS Volume & AMI Hydration"
        subtitle="Your Linux AMI snapshot in Amazon S3 is used to create a virtual NVMe root volume attached via the Nitro Card for EBS."
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
          badge="Snapshot"
          title="AMI in Amazon S3"
          subtitle="Contains the Linux kernel, root filesystem (/), and pre-installed packages"
          delaySeconds={0.4}
          accentColor="#FBBF24"
          width={295}
        />

        <ConnectorArrow delaySeconds={0.9} label="Lazy Load" color="#FBBF24" />

        <DiagramBox
          badge="Block Storage"
          title="EBS Root Volume"
          subtitle="Created in the same AZ; blocks stream from S3 on-demand as the OS reads them"
          delaySeconds={1.2}
          accentColor="#34D399"
          width={315}
        />

        <ConnectorArrow delaySeconds={1.8} label="NVMe / PCIe" color="#34D399" />

        <DiagramBox
          badge="Nitro Storage"
          title="Nitro Card for EBS"
          subtitle="Presents the remote EBS volume to the VM as a local /dev/nvme0n1 block device"
          delaySeconds={2.1}
          accentColor="#38BDF8"
          width={305}
        />
      </div>

      <div
        style={{
          backgroundColor: "#1E293B",
          borderLeft: "4px solid #34D399",
          padding: "14px 20px",
          borderRadius: 10,
          color: "#CBD5E1",
          fontSize: 17,
        }}
      >
        Because EBS uses lazy loading, the instance can start booting immediately without waiting for the entire AMI to copy.
      </div>
    </AbsoluteFill>
  );
};
