import "./mobilePapers.css"
import BottomNavigationBar from "./components/BottomNavigationBar"
import PaperCard from "./components/PaperCard"
import { useEffect, useState } from "react"
import get_papers_links from "../functions/get_papers_links"

const MobilePapers = () => {

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
    <div className="mobile-papers" >
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
      <BottomNavigationBar active={2}  />
    </div>
  )
}

export default MobilePapers