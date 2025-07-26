import "./Sorry.css";
import screenshot from "../assets/screenshot.png";

export default function Sorry({ onClose }) {
  return (
    <div className="sorry-overlay">
      <div className="sorry-box">
        <h1>⚠️ Limited Experience</h1>
        <p>
          You're on a mobile device. Website building features are only available on desktop.
        </p>
        <img src={screenshot} alt="Desktop Preview Screenshot" />
        <button onClick={onClose}>I Understand</button>
      </div>
    </div>
  );
}
