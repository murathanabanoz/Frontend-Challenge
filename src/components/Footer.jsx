import { useSelector } from "react-redux";
import "../css/footer.css";

function Footer() {
  const language = useSelector((state) => state.language.language);
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <h1 className="footer-top-h1">
              {language === "Eng"
                ? "Let's work together on your next product."
                : "Bir sonraki ürününüz üzerinde birlikte çalışalım."}
            </h1>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <div className="e-mail-bölümü">
                <div>👉</div>
                <div className="email">abanoz722@hotmail.com</div>
              </div>
            </div>
            <div className="footer-bottom-right">
              <a href="" className="personal-blog">
                {language === "Eng" ? "Personal blog" : "Kişisel blog"}
              </a>
              <a href="" className="github">
                Github
              </a>
              <a href="" className="linkedin">
                Linkedin
              </a>
            </div>
          </div>
          <p className="footer-text">
            {language === "Eng"
              ? "© 2024 Murathan Abanoz. All rights reserved."
              : " © 2024 Murathan Abanoz. Tüm hakları saklıdır"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
