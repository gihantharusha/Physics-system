import DesktopLogin from "../desktop/DesktopLogin";
import MobileLogin from "../mobile/MobileLogin";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="desktop">
        <DesktopLogin />
      </div>
      <div className="mobile">
        <MobileLogin />
      </div>
    </div>
  );
};

export default Login;
