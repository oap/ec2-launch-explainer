import { createRoot } from "react-dom/client";
import { Player } from "@remotion/player";
import { EC2_LAUNCH_CONFIG, EC2LaunchExplainer } from "./Composition";
import "./site.css";

export const Site = () => (
  <main className="page">
    <header className="intro">
      <p className="series-label">HOW IT WORKS · IT EXPLAINERS</p>
      <h1>Launching an EC2 instance</h1>
      <p className="summary">
        Follow the journey from an EC2 launch request to an instance ready for
        an SSH connection.
      </p>
    </header>

    <section aria-label="Interactive video preview" className="video-section">
      <div className="player-frame">
        <Player
          component={EC2LaunchExplainer}
          durationInFrames={EC2_LAUNCH_CONFIG.durationInFrames}
          fps={EC2_LAUNCH_CONFIG.fps}
          compositionWidth={EC2_LAUNCH_CONFIG.width}
          compositionHeight={EC2_LAUNCH_CONFIG.height}
          controls
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <p className="hint">
        Use the controls to play, pause, or scrub the video.
      </p>
    </section>

    <section aria-labelledby="rendered-title" className="rendered-section">
      <div>
        <p className="series-label">VIDEO FILE</p>
        <h2 id="rendered-title">Watch the rendered video</h2>
        <p className="summary">
          The MP4 below is rendered from the same Remotion composition.
        </p>
      </div>
      {import.meta.env.PROD ? (
        <a
          className="video-link"
          href={`${import.meta.env.BASE_URL}ec2-launch-explainer.mp4`}
          download
        >
          View or download the rendered MP4
        </a>
      ) : (
        <p className="hint">
          The rendered MP4 is included in the production site build.
        </p>
      )}
    </section>

    <footer>
      <p>
        An educational animation for the How It Works series. It does not create
        AWS resources or make a real SSH connection.
      </p>
    </footer>
  </main>
);

const container = document.getElementById("root");

if (!container) {
  throw new Error("Missing root element for the Pages site.");
}

createRoot(container).render(<Site />);
