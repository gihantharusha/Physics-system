import "./notificationBubble.css";

const NotificationBubble = ({title, content, sender, time, date}) => {
  return (
    <div className="notification-bubble">
      <p style={{opacity:0.5}} >{sender}</p>
      <p className="mobile-title" >{title}</p>
      <p>
       {content}
      </p>
      <section className="info">
        <p>{date}</p>
        <p>{time}</p>
      </section>
    </div>
  );
};

export default NotificationBubble;
