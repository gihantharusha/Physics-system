import { Link } from "react-router-dom";
import RegisterSteps from "../common components/RegisterSteps";
import "./mobileRegister.css";

const MobileRegister = () => {
  return (
    <div className="mobile-register">
      <div className="container">
        <RegisterSteps active={1} />
        <h1 className="mobile-title">Create a new account</h1>
        <section className="fields">
          <input type="text" className="input-fields" placeholder="First name" />
          <input type="text" className="input-fields" placeholder="Last name"/>
          <input type="text" className="input-fields" placeholder="Mobile phone" />
        </section>
        <button className="button">Next</button>
        <p>Already have an account? <Link className="link" to={"/login"} > Log in</Link></p>
      </div>
    </div>
  );
};

export default MobileRegister;
