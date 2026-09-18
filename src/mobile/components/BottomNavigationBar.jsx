import "./bottomNavigationBar.css";
import NotificationIcon from "../../Assets/Icons/notification.svg";
import PaperIcon from "../../Assets/Icons/paper.svg";
import TrophyIcon from "../../Assets/Icons/trophy.svg";
import ChartIcon from "../../Assets/Icons/chart.svg";
import PersonIcon from "../../Assets/Icons/person.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomNavigationBar = ({ active }) => {
  const navigate = useNavigate();

  const [notification, setNotification] = useState("none");
  const [paper, setPaper] = useState("none");
  const [trophy, setTrophy] = useState("none");
  const [chart, setChart] = useState("none");
  const [person, setPerson] = useState("none");

  const uid = sessionStorage.getItem("uid");

  useEffect(() => {
    switch (active) {
      case 1:
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNotification("var(--primary-color)");
        break;
      case 2:
        setPaper("var(--primary-color)");
        break;
      case 3:
        setTrophy("var(--primary-color)");
        break;
      case 4:
        setChart("var(--primary-color)");
        break;
      case 5:
        setPerson("var(--primary-color)");
        break;
    }
  }, [active]);

  return (
    <div className="bottom-nav-bar">
      <ul>
        <li
          style={{ backgroundColor: notification }}
          onClick={() =>
            navigate(`/notification`, {
              state: {
                uid,
              },
            })
          }
        >
          <img src={NotificationIcon} alt="Notification Icon" />
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
        </li>
        <li
          style={{ backgroundColor: trophy,  }}
          onClick={() =>
            navigate("/leader-board", {
              state: {
                uid,
              },
            })
          }
        >
          <img src={TrophyIcon} alt="Trophy Icon"  />
        </li>
        <li
          style={{ backgroundColor: chart }}
          onClick={() =>
            navigate(`/chart`, {
              state: {
                uid,
              },
            })
          }
        >
          <img src={ChartIcon} alt="Chart Icon" />
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
        </li>
      </ul>
    </div>
  );
};

export default BottomNavigationBar;
