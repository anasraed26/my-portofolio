import "./Cube.css";
import front from "../assets/front.png";
import back from "../assets/top.png";
import top from "../assets/top.png";
import bottom from "../assets/bottom.png";
import right from "../assets/right.png";
import left from "../assets/left.png";
import { useEffect, useRef } from "react";

export default function Cube() {
  const cubeRef = useRef()

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 1.5) / 25
      const y = (e.clientY - window.innerHeight / 2) / 25
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateY(${x}px) translateX(${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, []);

  return (
    <div className="cube-wrapper">
      <div className="scene">
        <div className="cube" ref={cubeRef}>
          <div className="face front" style={{ backgroundImage: `url(${front})` }} />
          <div className="face back" style={{ backgroundImage: `url(${back})` }} />
          <div className="face right" style={{ backgroundImage: `url(${right})` }} />
          <div className="face left" style={{ backgroundImage: `url(${left})` }} />
          <div className="face top" style={{ backgroundImage: `url(${top})` }} />
          <div className="face bottom" style={{ backgroundImage: `url(${bottom})` }} />
        </div>
      </div>
    </div>
  );
}
