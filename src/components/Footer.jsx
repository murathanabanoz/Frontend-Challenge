import "../css/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <h1 className="footer-top-h1">
              Let's work together on your next product.
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
                Personal Blog
              </a>
              <a href="" className="github">
                Github
              </a>
              <a href="" className="linkedin">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
