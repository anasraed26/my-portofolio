import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bld from "./components/Bld";
import ScrollHandler from "./components/ScrollHandler";
import { useMediaQuery } from "@mui/material";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sorry from "./components/Sorry";

export default function App() {
  const [bubbleText, setBubbleText] = useState("Scroll to build your own Website!")
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [showWarning, setShowWarning] = useState(true)

  return (
    <>
      {isMobile && showWarning && <Sorry onClose={() => setShowWarning(false)} />}

      <Nav />
      <main>
        <ScrollHandler setBubbleText={setBubbleText} />
        <Hero bubbleText={bubbleText} />
        {!isMobile && <Bld id="bld" />}
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
