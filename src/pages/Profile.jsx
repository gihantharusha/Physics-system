import DesktopProfile from "../desktop/DesktopProfile";
import MobileProfile from "../mobile/MobileProfile";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="desktop">
        <DesktopProfile />
      </div>
      <div className="mobile">
        {" "}
        <MobileProfile />{" "}
      </div>
    </div>
  );
};

export default Profile;
