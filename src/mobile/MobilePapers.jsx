import "./mobilePapers.css"
import BottomNavigationBar from "./components/BottomNavigationBar"
import PaperCard from "./components/PaperCard"

const MobilePapers = () => {
  return (
    <div className="mobile-papers" >
      <div className="container">
        <ul>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
          <li><PaperCard paper_number={1} date={"dd/mm/yyyy"} /></li>
        </ul>
      </div>
      <BottomNavigationBar active={2}  />
    </div>
  )
}

export default MobilePapers