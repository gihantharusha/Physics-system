import { useEffect, useState } from "react";
import "./registerSteps.css";

const RegisterSteps = ({ active, complete }) => {
  const [num1, setNum1] = useState("var(--hover-color)");
  const [num2, setNum2] = useState("var(--hover-color)");
  const [num3, setNum3] = useState("var(--hover-color)");

  useEffect(() => {
    switch (active) {
      case 1:
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNum1("var(--primary-color)");
        break;
      case 2:
        setNum2("var(--primary-color)");
        break;
      case 3:
        setNum3("var(--primary-color)");
        break;
    }

    if(complete != null){

    complete.map(e=>{
      switch (e) {
      case 1:
        setNum1("var(--green-color)");
        break;
      case 2:
        setNum2("var(--green-color)");
        break;
      case 3:
        setNum3("var(--green-color)");
        break;
    }
    })

  }

  }, [active, complete]);

  return (
    <div className="register-steps">
      <ul>
        <li>
          <div style={{ backgroundColor: num1 }}>1</div>
          <p>Basic Details</p>
        </li>
        <li>
          <div style={{ backgroundColor: num2 }}>2</div>
          <p>Advance Details</p>
        </li>
        <li>
          <div style={{ backgroundColor: num3 }}>3</div>
          <p>Create password</p>
        </li>
      </ul>
    </div>
  );
};

export default RegisterSteps;
