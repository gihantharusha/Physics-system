import "./notificationBar.css";
import NotificationBubble from "../../common components/NotificationBubble";
import { useEffect, useState } from "react";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { db } from "../../Firebase";

const NotificationBar = () => {
  const [notifications, setNotifications] = useState([]);

  const on_load = async () => {
    const unsubscribe = onSnapshot(
      query(collection(db, "Notification"), orderBy("createAt", "asc")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        data.sort((a, b) => {
          const dateTimeA = new Date(
            `${a.date.split("/").reverse().join("-")}T${a.time}`,
          );

          const dateTimeB = new Date(
            `${b.date.split("/").reverse().join("-")}T${b.time}`,
          );

          return dateTimeB - dateTimeA;
        });

        setNotifications(data);
      },
    );

    return () => unsubscribe();
  };

  useEffect(() => {
    on_load();
  }, []);

  return (
    <div className="notification-bar">
      <header>
        <p>Notifications</p>
      </header>
      <ul>
        {notifications.map((e) => (
          <li>
            <NotificationBubble
              content={e.content}
              sender={e.sender}
              date={e.date}
              time={e.time}
              title={e.title}
            />
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default NotificationBar;
