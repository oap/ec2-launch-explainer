# How It Works: Launching an EC2 Instance

The first demo in a series of short visual explainers about how things work in IT. This project uses [Remotion](https://www.remotion.dev/) to show what happens behind the scenes when an Amazon EC2 instance is launched.

## What this demo covers

The animation walks through six parts of the launch process:

1. The launch request reaches the EC2 API.
2. AWS selects placement and prepares the Nitro system.
3. An AMI and EBS storage are used to prepare the instance.
4. VPC networking is configured.
5. The instance boots and runs cloud-init.
6. The instance is ready for an SSH connection.

This is an educational animation, not an AWS deployment tool. It does not create AWS resources or make a real SSH connection.

## Run locally

### Requirements

- Node.js 20.19+, 22.13+, or 24+
- npm

### Install dependencies

```console
npm install
```

### Preview in Remotion Studio

```console
npm run dev
```

### Preview the website

```console
npm run site:dev
```

The site includes an interactive Remotion player. The rendered MP4 is included
in production builds.

### Render the video

```console
npm run render:video
```

The rendered video is written to `out/ec2-launch-explainer.mp4`. The `out` directory is ignored by Git.

### Build the Pages site locally

```console
npm run build:pages
```

This renders the MP4, copies it into the site assets, and builds the website into
`dist/`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` renders the video, builds
the interactive site, and deploys it to GitHub Pages whenever changes are
pushed to `main`. It can also be started manually from the repository's Actions
tab.

To enable deployment:

1. Put this project in its standalone GitHub repository.
2. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
3. Push the project to the `main` branch or run **Deploy GitHub Pages** from the **Actions** tab.

The site will be available at
`https://oap.github.io/ec2-launch-explainer/` after the first successful
deployment.

## About the series

Each demo in the **How It Works** series will use approachable visuals to explain a process, system, or concept in IT. This EC2 explainer is the first example; future topics can be added as separate projects.

## Learn more

- [Remotion documentation](https://www.remotion.dev/docs/)
- [Amazon EC2 documentation](https://docs.aws.amazon.com/ec2/)
