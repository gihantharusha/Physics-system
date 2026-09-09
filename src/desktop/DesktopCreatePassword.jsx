import "./desktopCreatePassword.css";
import SideImage from "../Assets/side-image.png";
import RegisterSteps from "../common components/RegisterSteps";
import { useNavigate } from "react-router-dom";

const DesktopCreatePassword = () => {
  const navigate = useNavigate();

  return (
    <div className="desktop-create-password">
      <div className="container">
        <section className="left">
          <RegisterSteps active={3} complete={[1, 2]} />
          <h1 className="mobile-title">Create password</h1>
          <section className="fields">
            <input
              type="password"
              className="input-fields"
              placeholder="New password"
            />
            <input
              type="password"
              className="input-fields"
              placeholder="Password again"
            />
          </section>

          <section className="buttons">
            <button className="button">Finish</button>
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
