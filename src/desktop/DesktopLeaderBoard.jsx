import { useEffect, useState } from "react";
import PersonCard from "../common components/PersonCard";
import "../mobile/mobileLeaderBoard.css";
import NavBar from "./components/NavBar";
import NotificationBar from "./components/NotificationBar";
import load_places from "../functions/load_places";
import check_login_user from "../functions/check_login";
import { useNavigate } from "react-router-dom";

const DesktopLeaderBoard = () => {
  const [show_notification_bar, set_show_notification_bar] = useState("none");

  const [top_ranks, set_top_ranks] = useState([]);

  const [other_ranks, set_other_ranks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const on_load = async () => {
      const res = await load_places();

      set_top_ranks(res.top);
      set_other_ranks(res.other);
    };

    const check_login = check_login_user();

    if (check_login) {
      on_load();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="desktop-leader-board">
      <div className="container" style={{ paddingLeft: "16.7%" }}>
        <h1 className="mobile-title">Weekly Leaders</h1>
        <section>
          {top_ranks.map((e) => (
            <PersonCard place={e.place} name={e.name} top_place={true} />
          ))}
          <hr style={{ width: "100%" }} />
        </section>
        <section>
          {other_ranks.map((e) => (
            <PersonCard place={e.place} name={e.name} top_place={false} />
          ))}
        </section>
      </div>
      <div style={{ display: show_notification_bar }}>
        <NotificationBar />
      </div>
      <NavBar
        active={3}
        show_notification_icon={true}
        notification_click_func={() => {
          show_notification_bar === "none"
            ? set_show_notification_bar("block")
            : set_show_notification_bar("none");
        }}
      />
    </div>
  );
};

export default DesktopLeaderBoard;
