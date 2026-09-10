import "./notificationBar.css";
import NotificationBubble from "../../common components/NotificationBubble";

const NotificationBar = () => {
  return (
    <div className="notification-bar">
      <header>Notifications</header>
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
        <li>
          <NotificationBubble />
        </li>
      </ul>
    </div>
  );
};

export default NotificationBar;
