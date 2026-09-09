import DesktopRegister from "../desktop/DesktopRegister";
import MobileRegister from "../mobile/MobileRegister";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="desktop">
        <DesktopRegister />
      </div>
      <div className="mobile">
        <MobileRegister />
      </div>
    </div>
  );
};

export default Register;
