import { Link, useNavigate } from "react-router-dom";
import RegisterSteps from "../common components/RegisterSteps";
import "./mobileRegister.css";
import { useState } from "react";
import ErrorAlert from "../common components/ErrorAlert";

const MobileRegister = () => {
  const navigate = useNavigate();

  const [f_name, set_f_name] = useState("");
  const [l_name, set_l_name] = useState("");
  const [mobile, set_mobile] = useState("");
  const [show_alert, set_show_alert] = useState("none");
  const [alert, set_alert] = useState("");

  const next_button_click = () => {
    if (f_name === "" || l_name === "" || mobile === "") {
      set_alert("Please fill the input fields");
      set_show_alert("block");
    } else if (mobile.length != 10) {
      set_alert("Please enter the valid mobile number");
      set_show_alert("block");
    } else {
      navigate("/register/advance", {
        state: {
          user: {
            f_name,
            l_name,
            mobile,
          },
        },
      });
    }
  };

  return (
    <div className="mobile-register">
      <div className="container">
        <RegisterSteps active={1} />
        <div style={{ display: show_alert }}>
          <ErrorAlert alert={alert} />
        </div>
        <h1 className="mobile-title">Create a new account</h1>
        <section className="fields">
          <input
            type="text"
            className="input-fields"
            placeholder="First name"
            onChange={(e) => {
              e.preventDefault();
              set_f_name(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-fields"
            placeholder="Last name"
            onChange={(e) => {
              e.preventDefault();
              set_l_name(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-fields"
            placeholder="Mobile phone"
            maxLength={10}
            minLength={0}
            onChange={(e) => {
              e.preventDefault();
              set_mobile(e.target.value);
            }}
          />
        </section>
        <button
          className="button"
          onClick={() => {
            next_button_click();
          }}
        >
          Next
        </button>
        <p>
          Already have an account?{" "}
          <Link className="link" to={"/login"}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MobileRegister;
