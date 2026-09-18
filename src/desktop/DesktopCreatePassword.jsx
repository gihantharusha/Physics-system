import "./desktopCreatePassword.css";
import SideImage from "../Assets/side-image.png";
import RegisterSteps from "../common components/RegisterSteps";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorAlert from "../common components/ErrorAlert";
import { useState } from "react";
import { register_finish_click } from "../functions/register_finish_click";

const DesktopCreatePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user;

  const [password, set_password] = useState("");
  const [password_again, set_password_again] = useState("");
  const [show_alert, set_show_alert] = useState("none");
  const [alert, set_alert] = useState("");
  const [show_loading, set_show_loading] = useState("none");

  const finish_button_click = async () => {
    set_show_loading("block");
    set_show_alert("none");
    const response = await register_finish_click(
      user,
      password,
      password_again,
    );

    if (response.showAlert) {
      set_show_loading("none");

      set_show_alert("block");
      set_alert(response.alert);
    } else {
      set_show_loading("none");

      set_show_alert("none");
      navigate("/login")
    }
  };

  return (
    <div className="desktop-create-password">
      <div className="container">
        <section className="left">
          <RegisterSteps active={3} complete={[1, 2]} />
          <div style={{ display: show_alert }}>
            <ErrorAlert alert={alert} />
          </div>
          <div className="loading" style={{ display: show_loading }}>
            Loading...
          </div>
          <h1 className="mobile-title">Create password</h1>
          <section className="fields">
            <input
              type="password"
              className="input-fields"
              placeholder="New password"
              onChange={(e) => {
                e.preventDefault();
                set_password(e.target.value);
              }}
            />
            <input
              type="password"
              className="input-fields"
              placeholder="Password again"
              onChange={(e) => {
                e.preventDefault();
                set_password_again(e.target.value);
              }}
            />
          </section>

          <section className="buttons">
            <button className="button" onClick={finish_button_click}>
              Finish
            </button>
            <button className="button" onClick={() => navigate(-1)}>
              Back
            </button>
          </section>
        </section>
        <section className="right">
          <img src={SideImage} alt="side image" />
        </section>
      </div>
    </div>
  );
};

export default DesktopCreatePassword;
