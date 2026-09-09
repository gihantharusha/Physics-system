import "./desktopAdvanceDetails.css";
import SideImage from "../Assets/side-image.png";
import RegisterSteps from "../common components/RegisterSteps";
import { useNavigate } from "react-router-dom";

const DesktopAdvanceDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="desktop-advance-details">
      <div className="container">
        <section className="left">
          <RegisterSteps active={2} complete={[1]} />
          <h1 className="mobile-title">Advance details</h1>
          <section className="fields">
            <input type="text" className="input-fields" placeholder="Address" />
            <input type="text" className="input-fields" placeholder="School" />
            <select className="selector">
              <option value="default">Select class</option>
              <option value="Class1">Class 1</option>
              <option value="Class2">Class 2</option>
              <option value="Class3">Class 3</option>
              <option value="Class4">Class 4</option>
            </select>
            <input type="text" className="input-fields" placeholder="NIC" />
          </section>
          <section className="buttons">
            <button className="button" onClick={()=>navigate("/register/create-password")} >Next</button>
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
