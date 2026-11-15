### Voiceover Script (Total: 54 seconds)
  #### Scene 1: Clicking "Launch Instance" → RunInstances API (0:00 – 0:09)

  • Visual: AWS Console / CLI box → SigV4 HTTPS arrow → IAM & Quota Check box → Validated
  arrow → EC2 State Machine (pending), with the POST .../RunInstances callout at the
  bottom.
  • Narration:
  │ "When you click Launch Instance, the AWS Console sends a signed RunInstances request
  │ to EC2. AWS checks your permissions and account limits, then assigns an Instance ID
  │ and marks it as pending."
  #### Scene 2: Host Placement & AWS Nitro Allocation (0:09 – 0:18)

  • Visual: Placement Engine box → Allocate arrow → Nitro Security Chip box → Provision
  arrow → Nitro Hypervisor box, with the Nitro offload note at the bottom.
  • Narration:
  │ "Next, the Placement Engine picks a physical host in your Availability Zone. The
  Nitro
  │ Security Chip verifies the hardware, and the Nitro Hypervisor carves out your virtual
  │ CPUs and memory."
  #### Scene 3: Root EBS Volume & AMI Hydration (0:18 – 0:27)

  • Visual: AMI in Amazon S3 box → Lazy Load arrow → EBS Root Volume box → NVMe / PCIe
  arrow → Nitro Card for EBS (/dev/nvme0n1).
  • Narration:
  │ "Your Linux AMI snapshot in S3 becomes a root EBS volume. Using lazy loading, blocks
  │ stream on demand through the Nitro Card for EBS as a local NVMe drive."


  #### Scene 4: VPC Networking, ENI & Security Groups (0:27 – 0:36)

  • Visual: ENI Attachment (eth0 / ens5, Private IPv4) → NAT Mapping arrow → Public IPv4
  / DNS → Port 22 arrow → Security Group box.
  • Narration:
  │ "The Nitro Card for VPC attaches a network interface with a private IP, maps a public
  │ IP for internet access, and programs your Security Group to allow SSH on port 22."


  #### Scene 5: Linux Kernel Boot & cloud-init (0:36 – 0:45)

  • Visual: UEFI -> GRUB -> Kernel box → IMDSv2 arrow → Metadata Service (169.254.169.
  254) → Write Key arrow → authorized_keys box, with the curl command at the bottom.
  • Narration:
  │ "Now the server boots Linux and starts systemd. cloud-init queries the Instance
  │ Metadata Service to fetch your SSH public key and writes it to authorized_keys."
  #### Scene 6: sshd Listening & SSH Handshake (0:45 – 0:54)
  • Visual: ssh -i key.pem box → TCP + TLS/SSH arrow → sshd (Port 22) box → Authenticated
  arrow → Interactive Shell ([ec2-user@ip-10-0-1-42 ~]$).
  • Narration:
  │ "Finally, sshd starts listening on port 22. When you run ssh with your private key,
  │ the server verifies it—and you're in, with an interactive Linux shell."

  ──────
  ### Timing Changes Made

  • Updated ec2-launch-explainer/src/Composition.tsx:16: Increased SCENE_DURATION_SECONDS
  from 6 to 9 seconds (270 frames per scene at 30 fps), bringing the total video duration
  from 36 seconds (1,080 frames) to 54 seconds (1,620 frames).
  • Why: Each scene's animations finish by 2.55s. Extending each scene to 9s preserves
  all existing visuals and animations untouched while giving ~20–25 words of natural,
  unhurried narration per scene.