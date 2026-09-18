import "./mobileProfile.css";
import BottomNavigationBar from "./components/BottomNavigationBar";
import PersonIcon from "../Assets/Icons/person.svg";
import VerifiedBadge from "../common components/VerifiedBadge";
import FullScreenAlert from "../common components/FullScreenAlert";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sign_out_anonymous } from "../services/firebase_auth";
import ErrorAlert from "../common components/ErrorAlert";
import check_login_user from "../functions/check_login";
import {
  get_user_data_from_uid,
  update_user_data,
} from "../services/firestore";

const MobileProfile = () => {
  const [alert_show, set_alert_show] = useState("none");
  const [show_error, set_show_error] = useState("none");
  const [f_name, set_f_name] = useState("");
  const [l_name, set_l_name] = useState("");
  const [school, set_school] = useState("");
  const [what_class, set_what_class] = useState("");
  const [reg_no, set_reg_no] = useState("");
  const [address, set_address] = useState("");
  const [mobile, set_mobile] = useState("");
  const [nic, set_nic] = useState("");
  const [error, set_error] = useState("");
  const [show_loding, set_show_loading] = useState("none");
  const navigate = useNavigate();

  const cancel_button = () => {
    if (alert_show === "block") {
      set_alert_show("none");
    }
  };

  const log_out_button = async () => {
    const res = await sign_out_anonymous();
    if (res === 1) {
      navigate("/login");
    } else {
      set_show_error("block");
      set_error("Something went wrong");
    }
  };

  const on_load_fun = async () => {
    set_show_loading("block");
    const check_login = await check_login_user(sessionStorage.getItem("uid"));
    if (check_login) {
      const user_data = await get_user_data_from_uid(
        sessionStorage.getItem("uid"),
      );
      set_show_loading("none");
      set_f_name(user_data.f_name);
      set_l_name(user_data.l_name);
      set_school(user_data.school);
      set_what_class(user_data.class);
      set_reg_no(user_data.reg_no);
      set_address(user_data.address);
      set_mobile(user_data.mobile);
      set_nic(user_data.nic);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    on_load_fun();
  }, []);

  const update_information = async () => {
    set_show_loading("block");
    const updated_data = {
      f_name,
      l_name,
      school,
      class: what_class,
      nic,
      mobile,
      address,
      reg_no,
    };
    // const res = await update_information(sessionStorage.getItem("uid"), updated_data)
    // console.log(res)
    const res = await update_user_data(
      sessionStorage.getItem("uid"),
      updated_data,
    );
    if (res) {
      on_load_fun();
    } else {
      set_show_error("block");
      set_error("Something went wrong");
    }
  };

  return (
    <div className="mobile-profile">
      <div style={{ display: alert_show }}>
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
        <div style={{ display: show_error }}>
          <ErrorAlert alert={error} />
        </div>
        <section className="main-info">
          <div>
            <img src={PersonIcon} alt="person icon" />
          </div>
          <p className="mobile-subTitle">User name</p>
        </section>
        <p className="mobile-subTitle">Update profile informations</p>
        <div className="loading" style={{ display: show_loding }}>
          Loading...
        </div>
        <section className="fields">
          <div className="row">
            <input
              type="text"
              className="input-fields"
              placeholder={f_name}
              onChange={(e) => {
                e.preventDefault();
                set_f_name(e.target.value);
              }}
            />
            <input
              type="text"
              className="input-fields"
              placeholder={l_name}
              onChange={(e) => {
                e.preventDefault();
                set_l_name(e.target.value);
              }}
            />
          </div>
          <input
            type="text"
            className="input-fields"
            placeholder={school}
            onChange={(e) => {
              e.preventDefault();
              set_school(e.target.value);
            }}
          />
          <select
            className="selector"
            onChange={(e) => {
              e.preventDefault();
              set_what_class(e.target.value);
            }}
          >
            <option value="select">{what_class}</option>
            <option value="Sunday: 12.30 PM to 5.30 PM">
              Sunday: 12.30 PM to 5.30 PM
            </option>
            <option value="Thursday: 3.00 PM to 8.00 PM">
              Thursday: 3.00 PM to 8.00 PM
            </option>
            <option value="Friday & Tuseday Combo: Friday 3.00 PM to 5.30 PM">
              Friday & Tuseday Combo: Friday 3.00 PM to 5.30 PM
            </option>
            <option value="Tuseday: 7.30 PM to 10.00 PM">
              Tuseday: 7.30 PM to 10.00 PM
            </option>
          </select>
          <input
            type="text"
            className="input-fields"
            placeholder={reg_no === "" ? "Register number" : reg_no}
            onChange={(e) => {
              e.preventDefault();
              set_reg_no(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-fields"
            placeholder={address}
            onChange={(e) => {
              e.preventDefault();
              set_address(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-fields"
            placeholder={mobile}
            onChange={(e) => {
              e.preventDefault();
              set_mobile(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-fields"
            placeholder={nic}
            onChange={(e) => {
              e.preventDefault();
              set_nic(e.target.value);
            }}
          />
        </section>
        <section className="buttons">
          <button className="button" onClick={update_information}>
            Update profile informations
          </button>
          <button
            className="button negative-button"
            onClick={() => set_alert_show("block")}
          >
            Log out
          </button>
        </section>
      </div>
      <BottomNavigationBar active={5} />
    </div>
  );
};

export default MobileProfile;
