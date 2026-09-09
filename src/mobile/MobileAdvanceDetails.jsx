import "./mobileAdvanceDetails.css";
import RegisterSteps from "../common components/RegisterSteps";
import { useNavigate } from "react-router-dom";

const MobileAdvanceDetails = () => {

  const navigate = useNavigate()

  return (
    <div className="advance-details">
      <div className="container">
        <RegisterSteps active={2} complete={[1]} />
        <h1 className="mobile-title">Advance details</h1>
        <section className="fields">
          <input type="text" className="input-fields" placeholder="Address" />
          <input type="text" className="input-fields" placeholder="School" />
          <select defaultValue={"Select class"} className="selector">
            <option value="class"> Select Class </option>
            <option value="class 1">class1</option>
            <option value="class 2">class2</option>
            <option value="class 3">class3</option>
            <option value="class 4">class4</option>
          </select>
          <input type="text" className="input-fields" placeholder="NIC" />
        </section>
        <section className="buttons">
          <button className="button" onClick={()=>navigate("/register/create-password")} >Next</button>
          <button className="button" onClick={()=>navigate(-1)} >Back</button>
        </section>
      </div>
    </div>
  );
};

export default MobileAdvanceDetails;
