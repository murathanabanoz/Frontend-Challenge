import "../css/profile.css";

function Profile() {
  return (
    <>
      <div className="profile-horizontal"></div>
      <div className="profile-container">
        <div className="profile-top">
          <h1>Profile</h1>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-left">
            <div className="profile-bottom-left-top">
              <h2 style={{ color: "rgba(67, 56, 202, 1)" }}>Profile</h2>
            </div>
            <div className="profile-bottom-left-bottom">
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  Doğum tarihi
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  12.09.1998
                </div>
              </div>
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  İkamet şehri
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  Trabzon
                </div>
              </div>
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  Eğitim durumu
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  Kocaeli ünv. RTS
                </div>
              </div>
              <div className="profile-bottom-left-bottom-content">
                <div className="profile-bottom-left-bottom-content-left">
                  Tercih ettiği rol
                </div>
                <div className="profile-bottom-left-bottom-content-right">
                  Frontend developer
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="profile-bottom-right">
            <h2 style={{ color: "rgba(67, 56, 202, 1)" }}>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              dolorem consectetur vitae tempora architecto amet cupiditate qui.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              illum aperiam corporis quis optio quas iusto sequi maiores
              necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
