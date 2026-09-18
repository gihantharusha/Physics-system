import "./navBar.css";
import PaperIcon from "../../Assets/Icons/paper.svg";
import TrophyIcon from "../../Assets/Icons/trophy.svg";
import ChartIcon from "../../Assets/Icons/chart.svg";
import PersonIcon from "../../Assets/Icons/person.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationIcon from "../../Assets/Icons/notification.svg";

const NavBar = ({
  active,
  show_notification_icon,
  notification_click_func,
}) => {
  const navigate = useNavigate();

  const [paper, setPaper] = useState("none");
  const [trophy, setTrophy] = useState("none");
  const [chart, setChart] = useState("none");
  const [person, setPerson] = useState("none");

  const uid = sessionStorage.getItem("uid");

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
          onClick={() =>
            navigate(`/notification`, {
              state: {
                uid,
              },
            })
          }
        >
          <img src={ChartIcon} alt="Chart Icon" />
          <p>Progress</p>
        </li>
        <li
          style={{ backgroundColor: paper }}
          onClick={() =>
            navigate(`/papers`, {
              state: {
                uid,
              },
            })
          }
        >
          <img src={PaperIcon} alt="Paper Icon" />
          <p>Papers</p>
        </li>
        <li
          style={{ backgroundColor: trophy }}
          onClick={() =>
            navigate("/leader-board", {
              state: {
                uid,
              },
            })
          }
        >
          <img src={TrophyIcon} alt="Trophy Icon" />
          <p>Leader board</p>
        </li>
        <li
          style={{ backgroundColor: person }}
          onClick={() =>
            navigate(`/profile`, {
              state: {
                uid,
              },
            })
          }
        >
          <img src={PersonIcon} alt="person Icon" />
          <p>Profile</p>
        </li>
      </ul>
      <div
        className="notification"
        style={{ display: show_notification_icon }}
        onClick={notification_click_func}
      >
        <img
          src={NotificationIcon}
          alt="notification icon"
          className="notification"
        />
      </div>
    </div>
  );
};

export default NavBar;
