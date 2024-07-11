import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <span className="dark-mode-span">Dark Mode</span>
        <span className="divider">|</span>
        <span>
          <span style={{ color: "blue", marginLeft: "-10px" }}>Türkçe</span> 'ye
          Geç
        </span>
      </div>
      <div className="header-bottom">
        <button className="skills-btn">Skills</button>
        <button className="projects-btn">Projects</button>
        <button className="hire-me-btn">Hire Me</button>
      </div>
    </div>
  );
};

export default Header;
