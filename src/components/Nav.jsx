import { useMediaQuery } from "@mui/material";
import navIcon from "../assets/nav-icon.png";

export default function Nav() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <nav className={isMobile ? "centerNav" : null}>
      <h1>ANOOSA</h1>

      {!isMobile && (
        <div className="nav-container">
          <a href="#about"><h2>About me</h2></a>
          <a href="#skills"><h2>Skills</h2></a>
          <a href="#contact"><h2>Contact</h2></a>
        </div>
      )}
    </nav>
  );
}
