import "./desktopRegister.css";
import SideImage from "../Assets/side-image.png";
import RegisterSteps from "../common components/RegisterSteps";
import { Link, useNavigate } from "react-router-dom";

const DesktopRegister = () => {

  const navigate = useNavigate()

  return (
    <div className="desktop-register">
      <div className="container">
        <section className="left">
          <RegisterSteps active={1} />
          <h1 className="mobile-title" >Create a new account</h1>
          <section className="fields">
            <div>
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
            <input
              type="text"
              className="input-fields"
              placeholder="Mobile phone"
            />
          </section>
          <button className="button" onClick={()=>navigate("/register/advance")} >Next</button>
          <p>Already have an account? <Link className="link" to={"/login"} >Log in</Link></p>
        </section>
        <section className="right">
          <img src={SideImage} alt="side image" />
        </section>
      </div>
    </div>
  );
};

export default DesktopRegister;
