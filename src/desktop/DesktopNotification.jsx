import LineChart from "../common components/LineChart";
import NavBar from "./components/NavBar";
import NotificationBar from "./components/NotificationBar";
import "./desktopNotification.css";

const DesktopNotification = () => {
  return (
    <div className="desktop-notification">
      <div className="container">
        <LineChart
          number_of_paper={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          marks={[10, 20, 20, 40, 50, 90, 55, 74.5, 60]}
        />
      </div>
      <NavBar active={1} />
      <NotificationBar />
    </div>
  );
};

export default DesktopNotification;
