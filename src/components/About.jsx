import "../css/about.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import profileImage from "../assets/dümen.jpeg";
function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-content-left">
          <h3 className="about-name">Murathan Abanoz</h3>
          <h1 className="about-h1">Creative thinker Minimalism lover</h1>
          <p className="about-paragraf">
            Hi, I'm Murathan.I'm a frontend developer.If you are looking for a
            developer who to craft solid and scalable frontend products with
            great users experiences.Let's shake hands with me.
          </p>
          <div className="buttons">
            <button className="about-btn about-hire-me-btn">Hire me</button>
            <button className="about-btn about-github-btn">
              <FaGithub className="about-github-icon" />
              <span className="about-github-span">Github</span>
            </button>
            <button className="about-btn about-linkedin-btn">
              <FaLinkedinIn className="about-linkedin-icon" />
              <span className="about-linkedin-span">Linkedin</span>
            </button>
          </div>
        </div>
        <div className="about-content-right">
          <img src={profileImage} alt="Profil-resmim" />
        </div>
      </div>
    </>
  );
}

export default About;
