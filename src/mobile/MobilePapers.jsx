import "./mobilePapers.css";
import BottomNavigationBar from "./components/BottomNavigationBar";
import PaperCard from "./components/PaperCard";
import { useEffect, useState } from "react";
import get_papers_links from "../functions/get_papers_links";
import { useNavigate } from "react-router-dom";
import check_login_user from "../functions/check_login";

const MobilePapers = () => {
  const [links, set_links] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPDFs = async () => {
      const res = await get_papers_links(sessionStorage.getItem("uid"));
      console.log(res);
      set_links(res);
    };

    const check_login = check_login_user();

    if (check_login) {
      loadPDFs();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="mobile-papers">
      <div className="container">
        <ul>
          {links.map((e) => (
            <li key={`${e.paper_type}-${e.paper_no}`}>
              <PaperCard
                paper_number={e.paper_no}
                paper_type={e.paper_type}
                link={e.link}
                date={e.date}
              />
            </li>
          ))}
        </ul>
      </div>
      <BottomNavigationBar active={2} />
    </div>
  );
};

export default MobilePapers;
