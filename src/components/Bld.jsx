import "./Bld.css";
import React from "react";
import layout1 from "../assets/Layout-1.png";
import layout2 from "../assets/Layout-2.png";
import layout3 from "../assets/Layout-3.png";

import DLayout1 from "./layouts/desktop/Layout1.jsx";
import MLayout1 from "./layouts/mobile/Layout1.jsx";
import DLayout2 from "./layouts/desktop/Layout2.jsx";
import MLayout2 from "./layouts/mobile/Layout2.jsx";
import DLayout3 from "./layouts/desktop/Layout3.jsx";

const layoutMap = {
  Layout1: {
    desktop: DLayout1,
    mobile: MLayout1,
  },
  Layout2: {
    desktop: DLayout2,
    mobile: MLayout2,
  },
  Layout3: {
    desktop: DLayout3,
  },
};

export default function Bld() {
  const [darkLight, setDarkLight] = React.useState(false)
  const [deskMobile, setDeskMobile] = React.useState(false)
  const [selectedLayoutKey, setSelectedLayoutKey] = React.useState("Layout1")
  const [brandName, setBrandName] = React.useState("Your Brand")
  const [accentColor, setAccentColor] = React.useState("#3498db")

  function handleDL() {
    setDarkLight((prev) => !prev)
  }
  function handleDM() {
    setDeskMobile((prev) => !prev)
  }

  const SelectedLayout =
    selectedLayoutKey && layoutMap[selectedLayoutKey]?.[deskMobile ? "mobile" : "desktop"]

  return (
    <section id="bld" className="build-sec">
      <h1 className="title">Build Your Own Website</h1>

      <div className="buttons">
        <button onClick={handleDL} className={`switch ${darkLight ? "on dark" : ""}`}>
          {darkLight ? "🌙" : "☀️"}
        </button>
        <button
          onClick={handleDM}
          className={`switch ${deskMobile ? "on" : ""} ${darkLight ? "dark" : ""}`}
        >
          {deskMobile ? "📱" : "🖥️"}
        </button>
      </div>

      <div className="controls">
        <label>
          Brand Name:
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="brand-input"
            placeholder="Enter brand name"
          />
        </label>
        <label>
          Accent Color:
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="color-picker"
          />
        </label>
      </div>

      <div className="viewSet">
        <fieldset className={`${deskMobile ? null : "fieldAdj"}`}>
          <legend>Choose Layout</legend>
          {(deskMobile ? ["Layout1", "Layout2"] : ["Layout1", "Layout2", "Layout3"]).map(
            (layoutKey) => (
              <label key={layoutKey}>
                <input
                  type="radio"
                  name="layoutGroup"
                  className="radio"
                  value={layoutKey}
                  checked={selectedLayoutKey === layoutKey}
                  onChange={(e) => setSelectedLayoutKey(e.target.value)}
                />
                <img
                  src={
                    layoutKey === "Layout1"
                      ? layout1
                      : layoutKey === "Layout2"
                      ? layout2
                      : layout3
                  }
                  className="layout"
                />
              </label>
            )
          )}
        </fieldset>

        <div
          className={`view ${deskMobile ? "mobile-view" : "desktop-view"} ${
            darkLight ? "dark-view" : ""
          }`}
          style={{
            "--accent-color": accentColor,
          }}
        >
          {SelectedLayout && (
            <SelectedLayout
              brandName={brandName}
              accentColor={accentColor}
              dark={darkLight}
            />
          )}
        </div>
      </div>
    </section>
  );
}
