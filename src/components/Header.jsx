import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "./DarkModeToggle";
import { switchLanguage } from "../slice";
import "../css/header.css";

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleLanguageSwitch = () => {
    dispatch(switchLanguage());
  };

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="header">
      <div className="header-top">
        <DarkModeToggle />
        <span className="divider">|</span>
        <span onClick={handleLanguageSwitch} style={{ cursor: "pointer" }}>
          <span style={{ color: "blue", marginLeft: "-10px" }}>
            {language === "Eng" ? "Türkçe" : "Eng"}
          </span>
          'ye Geç
        </span>
      </div>
      <div className="header-bottom">
        <div className="letter-a">A</div>
        <button className="skills-btn" onClick={handleSkillsClick}>
          {language === "Eng" ? "Skills" : "Yetenekler"}
        </button>
        <button className="projects-btn" onClick={handleProjectsClick}>
          {language === "Eng" ? "Projects" : "Projeler"}
        </button>
        <button className="hire-me-btn">
          {language === "Eng" ? "Hire me" : "İşe al"}
        </button>
      </div>
    </div>
  );
};

export default Header;
