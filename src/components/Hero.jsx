import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import speechBubble from "../assets/speech-bubble.png";
import Cube from "./Cube";
import { useMediaQuery } from "@mui/material";

export default function Hero({ bubbleText }) {
  const [text, setText] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const fullText = "Hi, I’m Anoosa — Front-End Developer & Designer.";
  const defaultBubble = "Scroll to build your own Website!";

  const isMobile = useMediaQuery("(max-width:1200px)");

  // Typing effect for main heading
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Default speech bubble text
  useEffect(() => {
    if(bubbleText != defaultBubble) {return}
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText2(defaultBubble.slice(0, i + 1));
        i++;
        if (i >= defaultBubble.length) clearInterval(interval);
      }, 50);
      hasTypedDefault.current = true;
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // New bubble text updates
  useEffect(() => {
    if (bubbleText == defaultBubble) {return};

    setDisplayText2(""); // Clear existing
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText2(bubbleText.slice(0, i + 1));
        i++;
        if (i >= bubbleText.length) clearInterval(interval);
      }, 50);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [bubbleText]);

  return (
    <div id="hero" className="hero-section">
      <div className="hero-glass">
        <h1 className="typing-text">
          {text}
          <span className="cursor">|</span>
        </h1>
        <p>I build sleek, responsive, interactive websites.</p>
        <div className="hero-buttons">
          <a href="https://github.com/anasraed26" target="_blank" rel="noopener noreferrer">See My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
      {!isMobile && (
        <div className="cube-holder">
          <Cube />
          <div className="speech-bubble-2">
            <img src={speechBubble} alt="Speech Bubble" className="speech-bubble" />
            <p className="typing-text2">
              {displayText2}
              <span className="cursor">|</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
