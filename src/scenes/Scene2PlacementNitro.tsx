import React from "react";
import { AbsoluteFill } from "remotion";
import { SceneHeader } from "../components/SceneHeader";
import { DiagramBox } from "../components/DiagramBox";
import { ConnectorArrow } from "../components/ConnectorArrow";

export const Scene2PlacementNitro: React.FC = () => {
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
        step={2}
        totalSteps={6}
        title="Host Placement & AWS Nitro Allocation"
        subtitle="The Placement Engine picks a physical bare-metal host in your Availability Zone, and the Nitro System carves out isolated compute."
        accentColor="#38BDF8"
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
          badge="Scheduler"
          title="Placement Engine"
          subtitle="Selects a physical host in the target AZ with free vCPU, RAM, and network capacity"
          delaySeconds={0.4}
          accentColor="#38BDF8"
          width={300}
        />

        <ConnectorArrow delaySeconds={0.9} label="Allocate" color="#38BDF8" />

        <DiagramBox
          badge="Hardware Root"
          title="Nitro Security Chip"
          subtitle="Verifies firmware integrity and isolates bare-metal host hardware"
          delaySeconds={1.2}
          accentColor="#A78BFA"
          width={300}
        />

        <ConnectorArrow delaySeconds={1.8} label="Provision" color="#A78BFA" />

        <DiagramBox
          badge="Hypervisor"
          title="Nitro Hypervisor"
          subtitle="Lightweight KVM-based hypervisor allocates vCPUs & memory with near-zero overhead"
          delaySeconds={2.1}
          accentColor="#34D399"
          width={310}
        />
      </div>

      <div
        style={{
          backgroundColor: "#1E293B",
          borderLeft: "4px solid #38BDF8",
          padding: "14px 20px",
          borderRadius: 10,
          color: "#CBD5E1",
          fontSize: 17,
        }}
      >
        Unlike traditional hypervisors, AWS Nitro offloads storage (EBS) and networking (VPC) to dedicated PCIe Nitro Cards.
      </div>
    </AbsoluteFill>
  );
};
