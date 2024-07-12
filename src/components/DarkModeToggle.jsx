import React, { useState, useEffect } from "react";
import "../css/darkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div className="mode-toggle">
        <div className={`icon-container ${darkMode ? "dark" : "light"}`}>
          <span className="icon">{darkMode ? "🌙" : "☀️"}</span>
        </div>
      </div>
      <span className="dark-mode-text">DARK MODE</span>
    </div>
  );
};

export default DarkModeToggle;
