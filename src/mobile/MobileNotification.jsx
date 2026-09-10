import NotificationBubble from "../common components/NotificationBubble";
import BottomNavigationBar from "./components/BottomNavigationBar";
import "./mobileNotification.css";

const MobileNotification = () => {
  return (
    <div className="mobile-notification">
      <div className="container">
        <ul>
          <li>
            <NotificationBubble />
          </li>
          <li>
            <NotificationBubble />
          </li>
          <li>
            <NotificationBubble />
          </li>
          <li>
            <NotificationBubble />
          </li>
          <li>
            <NotificationBubble />
          </li>
        </ul>
      </div>
      <BottomNavigationBar active={1} />
    </div>
  );
};

export default MobileNotification;
