import { useNavigate } from "react-router-dom";
import RegisterSteps from "../common components/RegisterSteps";
import "./mobileCreatePassword.css";

const MobileCreatePassword = () => {

    const navigate = useNavigate()

  return (
    <div className="mobile-create-password">
      <div className="container">
        <RegisterSteps active={3} complete={[1, 2]}  />
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
          <button className="button" onClick={()=>navigate(-1)} >Back</button>
        </section>
      </div>
    </div>
  );
};

export default MobileCreatePassword;
