import "./Layout2.css";

export default function Layout2({ brandName, accentColor }) {
  return (
    <section
      className="DL2"
      style={{
        "--accent-color": accentColor,
      }}
    >
      <header>
        <h1>{brandName}</h1>
        <div className="nav-links">
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Empower Your Online Presence</h2>
          <p>
            Discover modern, customizable layouts to showcase your brand
            effectively.
          </p>
          <button>Explore Now</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Blazing-fast load times and optimized performance.</p>
          </div>
          <div className="feature-card">
            <h3>Modern</h3>
            <p>Trendy and sleek designs to match your brand identity.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Looks perfect on all devices, big or small.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 {brandName}. All rights reserved.</p>
      </footer>
    </section>
  );
}
