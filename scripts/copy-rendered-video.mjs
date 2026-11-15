import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("public", { recursive: true });
copyFileSync("out/ec2-launch-explainer.mp4", "public/ec2-launch-explainer.mp4");
