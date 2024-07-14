import "../css/profile.css";

function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-top">
          <h1>Profile</h1>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-left">
            <h2>Profile</h2>
            <div className="profile-bottom-left-line">
              <p>
                Doğrum tarihi: <span>12.9.1998</span>
              </p>
            </div>
          </div>
          <div className="profile-bottom-right">
            <h2>About Me</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
