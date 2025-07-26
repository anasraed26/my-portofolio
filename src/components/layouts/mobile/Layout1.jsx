import "./Layout1.css";

export default function MLayout1({ brandName, accentColor }) {
  return (
    <section
      className="ML1"
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
        <div className="card">
          <h2>Welcome</h2>
          <p>This is a clean mobile layout inside the preview container.</p>
          <button>Get Started</button>
        </div>
      </main>
      <footer>
        <p>© 2025 {brandName}</p>
      </footer>
    </section>
  );
}
