import "./desktopAdvanceDetails.css";
import SideImage from "../Assets/side-image.png";
import RegisterSteps from "../common components/RegisterSteps";
import { useLocation, useNavigate } from "react-router-dom";
import {  useState } from "react";
import ErrorAlert from "../common components/ErrorAlert";

const DesktopAdvanceDetails = () => {
  const [address, set_address] = useState("");
  const [school, set_school] = useState("");
  const [what_class, set_what_class] = useState("");
  const [nic, set_nic] = useState("");
  const [show_alert, set_show_alert] = useState("none");
  const [alert, set_alert] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const user_basic_data = location.state?.user;

  const next_button_click = () => {
    if (address === "" || school === "" || what_class === "" || nic === "") {
      set_alert("Please fill the input fields");
      set_show_alert("block");
    } else {
      navigate("/register/create-password", {
        state: {
          user: {
            basic: {
              f_name: user_basic_data.f_name,
              l_name: user_basic_data.l_name,
              mobile: user_basic_data.mobile,
            },
            advance: {
              address,
              school,
              what_class,
              nic,
            },
          },
        },
      });
    }
  };

  return (
    <div className="desktop-advance-details">
      <div className="container">
        <section className="left">
          <RegisterSteps active={2} complete={[1]} />
          <div style={{ display: show_alert }}>
            <ErrorAlert alert={alert} />
          </div>
          <h1 className="mobile-title">Advance details</h1>
          <section className="fields">
            <input
              type="text"
              className="input-fields"
              placeholder="Address"
              onChange={(e) => {
                e.preventDefault();
                set_address(e.target.value);
              }}
            />
            <input
              type="text"
              className="input-fields"
              placeholder="School"
              onChange={(e) => {
                e.preventDefault();
                set_school(e.target.value);
              }}
            />
            <select className="selector" onChange={(e)=>{
              e.preventDefault()
              set_what_class(e.target.value)
            }}>
              <option value="select">select class</option>
            <option value="Sunday: 12.30 PM to 5.30 PM">Sunday: 12.30 PM to 5.30 PM</option>
            <option value="Thursday: 3.00 PM to 8.00 PM">Thursday: 3.00 PM to 8.00 PM</option>
            <option value="Friday & Tuseday Combo: Friday 3.00 PM to 5.30 PM">Friday & Tuseday Combo: Friday 3.00 PM to 5.30 PM</option>
            <option value="Tuseday: 7.30 PM to 10.00 PM">Tuseday: 7.30 PM to 10.00 PM</option>
            </select>
            <input
              type="text"
              className="input-fields"
              placeholder="NIC"
              onChange={(e) => {
                e.preventDefault();
                set_nic(e.target.value);
              }}
            />
          </section>
          <section className="buttons">
            <button
              className="button"
              onClick={() => next_button_click()}
            >
              Next
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

export default DesktopAdvanceDetails;
