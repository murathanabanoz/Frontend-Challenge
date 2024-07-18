import { useSelector } from "react-redux";
import "../css/skills.css";
import { skills } from "../Skills";

function Skills() {
  const language = useSelector((state) => state.language.language);

  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills-top">
          <h1 className="skills-top-h1">
            {language === "Eng" ? "Skills" : "Yetenekler"}
          </h1>
        </div>
        <div className="skills-bottom">
          {skills.map((item, index) => (
            <div key={index} className="skill-item">
              <h2 className="skill-item-h2">{item.skill}</h2>
              <p className="skill-item-p">
                {language === "Eng" ? item.text : item.text_tr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
