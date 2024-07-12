import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "../css/header.css";

const Header = () => {
  const [language, setLanguage] = useState("Eng");

  const switchLanguage = () => {
    setLanguage(language === "Eng" ? "Tr" : "Eng");
  };

  return (
    <div className="header">
      <div className="header-top">
        <DarkModeToggle />
        <span className="divider">|</span>
        <span onClick={switchLanguage} style={{ cursor: "pointer" }}>
          <span style={{ color: "blue", marginLeft: "-10px" }}>
            {language === "Eng" ? "Türkçe" : "Eng"}
          </span>
          'ye Geç
        </span>
      </div>
      <div className="header-bottom">
        <div className="letter-a">A</div>
        <button className="skills-btn">
          {language === "Eng" ? "Skills" : "Yetenekler"}
        </button>
        <button className="projects-btn">
          {language === "Eng" ? "Projects" : "Projeler"}
        </button>
        <button className="hire-me-btn">
          {language === "Eng" ? "Hire me" : "Hakkımda"}
        </button>
      </div>
    </div>
  );
};

export default Header;
