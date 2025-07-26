import "./Layout3.css";
import menuIcon from "../../../assets/nav-icon.png";
import { useState, useRef, useEffect } from "react";

export default function Layout3({ brandName, accentColor }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const wrapperRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [sidebarOpen])

  return (
    <section
      className="DL3"
      style={{
        "--accent-color": accentColor,
      }}
    >
      <div className={`overlay ${sidebarOpen ? "show" : ""}`} />

      <header>
        <img
          src={menuIcon}
          alt="menu"
          className="menu-icon"
          onClick={() => setSidebarOpen(true)}
        />
        <h1>{brandName}</h1>
      </header>

      <div
        ref={wrapperRef}
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
      >
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <main>
        <div className="text">
          <h2>Welcome!</h2>
          <p>This is Layout 3 — now with a sidebar that slides in.</p>
        </div>
        <div className="image-box">Image #1</div>
      </main>

      <footer>
        <p>© 2025 {brandName}</p>
      </footer>
    </section>
  );
}
