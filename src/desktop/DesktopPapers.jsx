import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NotificationBar from "./components/NotificationBar";
import PaperCard from "./components/PaperCard";
import "./desktopPapers.css";
import get_papers_links from "../functions/get_papers_links";

const DesktopPapers = () => {
  const [show_notification_bar, set_show_notification_bar] = useState("none");
  const [links, set_links] = useState([])

  useEffect(() => {
    const loadPDFs = async () => {
      const res = await get_papers_links(sessionStorage.getItem("uid"));
      console.log(res);
      set_links(res);
    };

    loadPDFs();
  }, []);

  return (
    <div className="desktop-paper">
      <div className="container">
        <ul>
          {links.map((e) => (
            <li key={`${e.paper_type}-${e.paper_no}`}>
              <PaperCard
                number_of_paper={e.paper_no}
                paper_type={e.paper_type}
                link={e.link}
                date={e.date}
              />
            </li>
          ))}
        </ul>
      </div>
      <NavBar
        active={2}
        notification_click_func={() => {
          show_notification_bar === "none"
            ? set_show_notification_bar("block")
            : set_show_notification_bar("none");
        }}
        show_notification_icon={"flex"}
      />
      <div style={{ display: show_notification_bar }}>
        <NotificationBar />
      </div>
    </div>
  );
};

export default DesktopPapers;
