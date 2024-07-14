import "../css/skills.css";
import { skills } from "../Skills";

function Skills() {
  return (
    <>
      <div className="skills-container">
        <div className="skills-top">
          <h1 className="skills-top-h1">Skills</h1>
        </div>
        <div className="skills-bottom">
          {skills.map((item, index) => (
            <div key={index} className="skill-item">
              <h2 className="skill-item-h2">{item.skill}</h2>
              <p className="skill-item-p">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
