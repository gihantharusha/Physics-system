import "./navBar.css";
import PaperIcon from "../../Assets/Icons/paper.svg";
import TrophyIcon from "../../Assets/Icons/trophy.svg";
import ChartIcon from "../../Assets/Icons/chart.svg";
import PersonIcon from "../../Assets/Icons/person.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ active }) => {
  const navigate = useNavigate();

  const [paper, setPaper] = useState("none");
  const [trophy, setTrophy] = useState("none");
  const [chart, setChart] = useState("none");
  const [person, setPerson] = useState("none");

  useEffect(() => {
    switch (active) {
      case 1:
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setChart("var(--primary-color)");
        break;
      case 2:
        setPaper("var(--primary-color)");
        break;
      case 3:
        setTrophy("none");
        break;
      case 4:
        setPerson("var(--primary-color)");
        break;
    }
  }, [active]);

  return (
    <div className="nav-bar">
      <ul>
        <li
          style={{ backgroundColor: chart }}
          onClick={() => navigate(`/notification/12345`)}
        >
          <img src={ChartIcon} alt="Chart Icon" />
          <p>Progress</p>
        </li>
        <li
          style={{ backgroundColor: paper }}
          onClick={() => navigate(`/papers/12345`)}
        >
          <img src={PaperIcon} alt="Paper Icon" />
          <p>Papers</p>
        </li>
        <li style={{ backgroundColor: trophy, opacity: 0.5 }}>
          <img src={TrophyIcon} alt="Trophy Icon" style={{ opacity: 0.5 }} />
          <p>Leader board</p>
        </li>
        <li style={{ backgroundColor: person }} onClick={()=>navigate(`/profile/12345`)} >
          <img src={PersonIcon} alt="person Icon" />
          <p>Profile</p>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
