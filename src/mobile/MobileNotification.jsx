import NotificationBubble from "../common components/NotificationBubble";
import BottomNavigationBar from "./components/BottomNavigationBar";
import "./mobileNotification.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";

const MobileNotification = () => {

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
    <div className="mobile-notification">
      <div className="container">
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
      <BottomNavigationBar active={1} />
    </div>
  );
};

export default MobileNotification;
