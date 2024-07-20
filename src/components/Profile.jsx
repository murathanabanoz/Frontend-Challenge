import { useSelector } from "react-redux";
import "../css/profile.css";

function Profile() {
  const language = useSelector((state) => state.language.language);

  const { Doğum_tarihi } = useSelector((state) => state.profile);
  const { İkametgah } = useSelector((state) => state.profile);
  const { Eğitim_durumu } = useSelector((state) => state.profile);
  const { Tercih_ettiği_rol } = useSelector((state) => state.profile);

  return (
    <>
      <div className="profile-horizontal"></div>
      <div className="profile-container">
        <div className="profile-top">
          <h1>{language === "Eng" ? "Profile" : "Profil"}</h1>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-left">
            <div className="profile-bottom-left-top">
              <h2>{language === "Eng" ? "Profile" : "Profil"}</h2>
            </div>
            <div className="profile-bottom-left-bottom">
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  {language === "Eng" ? "Date of birth" : "Doğum tarihi"}
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  {Doğum_tarihi}
                </div>
              </div>
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  {language === "Eng" ? "City ​​of residence" : "İkamet şehri"}
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  {İkametgah}
                </div>
              </div>
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  {language === "Eng"
                    ? "Educational background"
                    : "Eğitim durumu"}
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  {Eğitim_durumu}
                </div>
              </div>
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  {language === "Eng" ? "Preferred role" : "Tercih ettiği rol"}
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  {Tercih_ettiği_rol}
                </div>
              </div>
            </div>
          </div>
          <div className="profile-bottom-right">
            <h2>{language === "Eng" ? "About me" : "Hakkımda"}</h2>
            <p>
              {language === "Eng"
                ? "I closely follow developments in the technology world and can quickly adapt to new technologies. My openness to continuous learning and self-improvement keeps me always ready for new challenges."
                : "Teknoloji dünyasındaki gelişmeleri yakından takip ediyor ve yeni teknolojilere hızla adapte olabiliyorum. Sürekli öğrenmeye ve kendimi geliştirmeye açık olmam, beni her zaman yeni meydan okumalara hazır tutuyor."}
            </p>
            <p>
              {language === "Eng"
                ? "My goal is to use my technical skills and creativity to develop solutions that address real user needs, continually pushing forward in this process. If you're interested in working with me, please feel free to reach out!"
                : "Hedefim, teknik bilgilerimi ve yaratıcılığımı kullanarak, kullanıcıların gerçek ihtiyaçlarına yönelik çözümler üretmek ve bu süreçte sürekli olarak ileriye gitmek. Eğer siz de benimle çalışmak isterseniz, lütfen bana ulaşmaktan çekinmeyin!"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
