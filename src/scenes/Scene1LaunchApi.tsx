import React from "react";
import { AbsoluteFill } from "remotion";
import { SceneHeader } from "../components/SceneHeader";
import { DiagramBox } from "../components/DiagramBox";
import { ConnectorArrow } from "../components/ConnectorArrow";

export const Scene1LaunchApi: React.FC = () => {
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
        step={1}
        totalSteps={6}
        title='Clicking "Launch Instance" -> RunInstances API'
        subtitle="The AWS Console translates your selections into a signed HTTPS RunInstances request to the EC2 Control Plane."
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginTop: 12,
        }}
      >
        <DiagramBox
          badge="Client"
          title="AWS Console / CLI"
          subtitle="AMI ID, Instance Type, Key Pair, Subnet, Security Group"
          delaySeconds={0.4}
          accentColor="#FF9900"
          width={290}
        />

        <ConnectorArrow delaySeconds={0.9} label="SigV4 HTTPS" color="#FF9900" />

        <DiagramBox
          badge="Auth & Limits"
          title="IAM & Quota Check"
          subtitle="Verifies ec2:RunInstances permission, vCPU limits, and key pair existence"
          delaySeconds={1.2}
          accentColor="#38BDF8"
          width={310}
        />

        <ConnectorArrow delaySeconds={1.8} label="Validated" color="#38BDF8" />

        <DiagramBox
          badge="Control Plane"
          title="EC2 State Machine"
          subtitle='Assigns Instance ID (i-0abc...) and sets state to "pending"'
          delaySeconds={2.1}
          accentColor="#34D399"
          width={300}
        />
      </div>

      <div
        style={{
          backgroundColor: "#1E293B",
          borderLeft: "4px solid #FF9900",
          padding: "14px 20px",
          borderRadius: 10,
          color: "#E2E8F0",
          fontSize: 16,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        POST https://ec2.us-east-1.amazonaws.com/?Action=RunInstances&InstanceType=t3.micro&ImageId=ami-0c55b159...
      </div>
    </AbsoluteFill>
  );
};
