import "./Layout1.css";

export default function Layout1({ brandName, accentColor }) {
  return (
    <section
      className="DL1"
      style={{
        "--accent-color": accentColor,
      }}
    >
      <header>
        <h1>{brandName}</h1>
        <div className="nav-links">
          <span>Home</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </header>

      <main>
        <div className="left-card">
          <h2>Welcome to Your Site</h2>
          <p>Build modern websites quickly using our intuitive editor.</p>
          <button>Get Started</button>
        </div>

        <div className="right-text">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>⚡ Fast Performance</li>
            <li>🎨 Clean Design</li>
            <li>📱 Responsive Layouts</li>
            <li>🛠️ Easy Customization</li>
          </ul>
        </div>
      </main>

      <footer>
        <p>© 2025 {brandName}. All rights reserved.</p>
      </footer>
    </section>
  );
}
