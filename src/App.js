import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [darkSide, setDarkSide] = useState(false);

  const applyDark = () => {
    setDarkSide((prevDarkSide) => !darkSide);
  };

  return (
    <div className={`project ${darkSide ? "dark" : ""}`}>
      <div>
        <h1>The Force</h1>
        <div className="buttons">
          <button
            className={`red ${darkSide ? "dark-button" : ""}`}
            onClick={applyDark}
          ></button>
          <button
            className={`blue ${darkSide ? "dark-button" : ""}`}
            onClick={applyDark}
          ></button>
        </div>
      </div>
      <h2>Choose light or dark!</h2>
    </div>
  );
}
