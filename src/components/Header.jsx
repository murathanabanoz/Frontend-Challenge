import React from "react";
import "../css/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <span className="header-text">
          <span className="header-text">Dark Mode</span>
          <span className="header-text-ara">|</span>
          <span className="turkce">Türkçe</span>'ye Geç
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
