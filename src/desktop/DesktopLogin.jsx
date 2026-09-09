import "./desktopLogin.css";
import SideImage from "../Assets/side-image.png";
import { Link } from "react-router-dom";

const DesktopLogin = () => {
  return (
    <div className="desktop-login">
      <div className="container">
        <section className="left">
          <img src={SideImage} alt="Side image" />
        </section>
        <section className="right">
            <h1 className="mobile-title" >Login to your account</h1>
            <section className="fields">
                <input type="text" className="input-fields" placeholder="Register number" />
                <input type="password" className="input-fields" placeholder="Password" />
            </section>
            <button className="button">Login</button>

            <p>Don't have an account ?  <Link className="link" to={"/register"} >Register</Link></p>

        </section>
      </div>
    </div>
  );
};

export default DesktopLogin;
