import LineChart from "../common components/LineChart";
import NavBar from "./components/NavBar";
import NotificationBar from "./components/NotificationBar";
import "./desktopNotification.css";
import { useEffect, useState } from "react";
import check_login_user from "../functions/check_login";
import load_chart_data from "../functions/load_chart_data";
import MarksTable from "../common components/MarksTable";
import { useNavigate } from "react-router-dom";

const DesktopNotification = () => {
  const [marks, set_marks] = useState([]);
  const [paper_no, set_paper_no] = useState([]);
  const [show_notification_bar, set_show_notification_bar] = useState("none");

  const navigate = useNavigate()

  const on_load = async () => {
    const res = await check_login_user(sessionStorage.getItem("uid"));

    if (res) {
      load_chart();
    }else{
      navigate("/login")
    }
  };

  const load_chart = async () => {
    const result = await load_chart_data(sessionStorage.getItem("uid"));
    set_marks(result.marks_array);
    set_paper_no(result.paper_no_array);
  };

  useEffect(() => {
    on_load();
  }, []);

  return (
    <div className="desktop-notification">
      <div className="container">
        <LineChart number_of_paper={paper_no} marks={marks} />
        <MarksTable />
      </div>
      <NavBar
        active={1}
        show_notification_icon={"flex"}
        notification_click_func={() => {
          show_notification_bar === "none"
            ? set_show_notification_bar("block")
            : set_show_notification_bar("none");
        }}
      />
      <div style={{ display: show_notification_bar }}>
        <NotificationBar />
      </div>
    </div>
  );
};

export default DesktopNotification;
