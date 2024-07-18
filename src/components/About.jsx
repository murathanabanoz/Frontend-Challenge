import "../css/about.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import profileImage from "../assets/dümen.jpeg";
import { useSelector } from "react-redux";
function About() {
  const language = useSelector((state) => state.language.language);

  return (
    <>
      <div className="about-container">
        <div className="about-content-left">
          <h3 className="about-name">Murathan Abanoz</h3>
          <h1 className="about-h1">
            {language === "Eng"
              ? "Creative thinker, Minimalism lover"
              : "Yaratıcı düşünceci, Minimalizm aşığı"}
          </h1>
          <p className="about-paragraf">
            {language === "Eng"
              ? "Hi, I'm Murathan. I'm a frontend developer. If you are looking for a developer to craft solid and scalable frontend products with great user experiences, let's shake hands with me."
              : "Merhaba, ben Murathan. Ben bir frontend geliştiriciyim. Eğer sağlam ve ölçeklenebilir frontend ürünleri üretecek bir geliştirici arıyorsanız, harika kullanıcı deneyimleri sunuyorum. Hadi el sıkışalım."}
          </p>
          <div className="buttons">
            <button className="about-btn about-hire-me-btn">
              {language === "Eng" ? "Hire me" : "İşe al"}
            </button>
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
