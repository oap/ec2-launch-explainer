import React from "react";
import { AbsoluteFill } from "remotion";
import { SceneHeader } from "../components/SceneHeader";
import { DiagramBox } from "../components/DiagramBox";
import { ConnectorArrow } from "../components/ConnectorArrow";

export const Scene4VpcNetworking: React.FC = () => {
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
        step={4}
        totalSteps={6}
        title="VPC Networking, ENI & Security Groups"
        subtitle="The Nitro Card for VPC attaches an Elastic Network Interface (ENI), assigns IP addresses, and enforces stateful firewall rules."
        accentColor="#A78BFA"
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
          badge="Network Interface"
          title="ENI Attachment"
          subtitle="eth0 / ens5 created in your Subnet with a Private IPv4 (e.g., 10.0.1.42)"
          delaySeconds={0.4}
          accentColor="#A78BFA"
          width={300}
        />

        <ConnectorArrow delaySeconds={0.9} label="NAT Mapping" color="#A78BFA" />

        <DiagramBox
          badge="Internet Gateway"
          title="Public IPv4 / DNS"
          subtitle="1:1 NAT maps an ephemeral Public IP (or Elastic IP) to your Private IP"
          delaySeconds={1.2}
          accentColor="#38BDF8"
          width={300}
        />

        <ConnectorArrow delaySeconds={1.8} label="Port 22" color="#38BDF8" />

        <DiagramBox
          badge="Stateful Firewall"
          title="Security Group"
          subtitle="Nitro Card programs allow rule: Inbound TCP 22 from your CIDR"
          delaySeconds={2.1}
          accentColor="#34D399"
          width={300}
        />
      </div>

      <div
        style={{
          backgroundColor: "#1E293B",
          borderLeft: "4px solid #A78BFA",
          padding: "14px 20px",
          borderRadius: 10,
          color: "#CBD5E1",
          fontSize: 17,
        }}
      >
        Security Groups are enforced in hardware on the Nitro Card for VPC—outside the guest Linux kernel.
      </div>
    </AbsoluteFill>
  );
};
