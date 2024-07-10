import React, { useState } from "react";
import "../css/header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("eng");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  const switchLanguage = () => {
    setLanguage(language === "eng" ? "tr" : "eng");
  };

  return (
    <header className={`header ${darkMode ? "dark-theme" : ""}`}>
      <div className="header-top">
        <span className="header-text">
          <span className="dark-mode" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
          <span className="header-text-ara">|</span>
          <span className="turkce" onClick={switchLanguage}>
            {language === "eng" ? "Türkçe'ye Geç" : "Switch to Eng"}
          </span>
        </span>
      </div>
      <div className="header-bottom">
        <span className="header-link">Skills</span>
        <span className="header-link">Projects</span>
        <span className="header-link">Hire Me</span>
      </div>
    </header>
  );
}

export default Header;
