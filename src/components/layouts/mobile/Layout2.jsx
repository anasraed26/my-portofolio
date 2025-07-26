import "./Layout2.css";

export default function MLayout2({ brandName, accentColor }) {
  return (
    <section
      className="ML2"
      style={{
        "--accent-color": accentColor,
      }}
    >
      <header>
        <h1>{brandName}</h1>
        <div className="nav-links">
          <span>About</span>
          <span>Portfolio</span>
          <span>Hire Me</span>
        </div>
      </header>
      <main>
        <div className="feature-list">
          <div className="feature">
            <h3>🧩 Custom UI</h3>
            <p>Pixel-perfect components for all screen sizes.</p>
          </div>
          <div className="feature">
            <h3>⚡ Fast Performance</h3>
            <p>Optimized for speed and efficiency.</p>
          </div>
          <div className="feature">
            <h3>📱 Mobile First</h3>
            <p>Designed with mobile users in mind.</p>
          </div>
        </div>
      </main>
      <footer>
        <button>Get Started</button>
        <p>© 2025 {brandName}</p>
      </footer>
    </section>
  );
}
