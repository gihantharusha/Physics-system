import "./mobileProfile.css";
import BottomNavigationBar from "./components/BottomNavigationBar";
import PersonIcon from "../Assets/Icons/person.svg";

const MobileProfile = () => {
  return (
    <div className="mobile-profile">
      <div className="container">
        <h1 className="mobile-title">Profile informations</h1>
        <section>
          <div>
            <img src={PersonIcon} alt="person icon" />
          </div>
          <p className="mobile-subTitle" >User name</p>
        </section>
        <p className="mobile-subTitle">Update profile informations</p>
        <section>
          
        </section>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default MobileProfile;
