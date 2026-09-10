import "./desktopProfile.css";
import NavBar from "./components/NavBar";
import NotificationBar from "./components/NotificationBar";
import VerifiedBadge from "../common components/VerifiedBadge";
import PersonIcon from "../Assets/Icons/person.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenAlert from "../common components/FullScreenAlert";

const DesktopProfile = () => {
  const [alert_show, set_alert_show] = useState("none");
  const navigate = useNavigate();

  const cancel_button = () => {
    if (alert_show === "block") {
      set_alert_show("none");
    }
  };

  const log_out_button = () => {
    navigate("/login");
  };

  return (
    <div className="desktop-profile">
      <div style={{display:  alert_show}} >
        <FullScreenAlert
          title={"Are you sure you want to log out?"}
          content={
            "Are you sure you want to log out? You can log back in anytime."
          }
          positiveButton={"Cancel"}
          negitiveButton={"Log out"}
          negative_button_function={log_out_button}
          positive_button_function={cancel_button}
        />
      </div>
      <div className="container">
        <h1 className="mobile-title">Profile informations</h1>
        <section className="main-info">
          <div>
            <img src={PersonIcon} alt="person icon" />
          </div>
          <p className="mobile-subTitle">User name</p>
          <VerifiedBadge />
        </section>
        <p className="mobile-subTitle">Update profile informations</p>
        <section className="fields">
          <div className="row">
            <input
              type="text"
              className="input-fields"
              placeholder="First name"
            />
            <input
              type="text"
              className="input-fields"
              placeholder="Last name"
            />
          </div>
          <input type="text" className="input-fields" placeholder="School" />
          <select className="selector">
            <option value="select">Select class</option>
            <option value="class1">class1</option>
            <option value="class2">class2</option>
            <option value="class3">class3</option>
            <option value="class4">class4</option>
          </select>
          <input
            type="text"
            className="input-fields"
            placeholder="Register number"
          />
          <input type="text" className="input-fields" placeholder="Address" />
          <input
            type="text"
            className="input-fields"
            placeholder="Mobile phone"
          />
          <input type="text" className="input-fields" placeholder="Email" />
          <input type="text" className="input-fields" placeholder="NIC" />
        </section>
        <section className="buttons">
          <button className="button">Update profile informations</button>
          <button
            className="button negative-button"
            onClick={() => set_alert_show("block")}
          >
            Log out
          </button>
        </section>
      </div>
      <NavBar active={4} />
      <NotificationBar />
    </div>
  );
};

export default DesktopProfile;
