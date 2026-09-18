import { Link, useNavigate } from "react-router-dom";
import "./mobileLogin.css";
import { useState } from "react";
import { login_click } from "../functions/login_click";
import ErrorAlert from "../common components/ErrorAlert";

const MobileLogin = () => {
  const navigate = useNavigate();
  const [mobile, set_mobile] = useState("");
  const [password, set_password] = useState("");
  const [show_alert, set_show_alert] = useState("none");
  const [alert, set_alert] = useState("");
  const [show_loading, set_show_loading] = useState("none");

  const login_button_click = async () => {
    set_show_loading("block");
    set_show_alert("none");
    const res = await login_click(password, mobile);

    if (res.showAlert) {
      set_show_loading("none");

      set_show_alert("block");
      set_alert(res.alert);
    } else {
      set_show_loading("none");

      set_show_alert("none");
      const uid = sessionStorage.getItem("uid")
      navigate(`/notification`, {
        state:{
          uid,
        }
      });
    }
  };

  return (
    <div className="mobile-login">
      <div className="container">
        <h1 className="mobile-title">Login to your account</h1>
        <div style={{ display: show_alert }}>
          <ErrorAlert alert={alert} />
        </div>
        <div className="loading" style={{ display: show_loading }}>
          Loading...
        </div>
        <section className="fields">
          <input
            type="text"
            className="input-fields"
            placeholder="Mobile number"
            onChange={(e) => {
              e.preventDefault();
              set_mobile(e.target.value);
            }}
          />
          <input
            type="password"
            className="input-fields"
            placeholder="Password"
            onChange={(e) => {
              e.preventDefault();
              set_password(e.target.value);
            }}
          />
        </section>
        <button
          className="button"
          onClick={() => {
            // navigate(`/notification/12345`)
            login_button_click();
          }}
        >
          Login
        </button>
        <p>
          Don't have an account?
          <Link className="link" to={"/register"}>
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MobileLogin;
