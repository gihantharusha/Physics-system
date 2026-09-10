import NavBar from "./components/NavBar"
import NotificationBar from "./components/NotificationBar"
import PaperCard from "./components/PaperCard"
import "./desktopPapers.css"

const DesktopPapers = () => {
  return (
<div className="desktop-paper">
  <div className="container">
    <ul>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
      <li><PaperCard number_of_paper={1} date={"dd/mm/yyyy"} /></li>
    </ul>
  </div>
  <NavBar active={2} />
  <NotificationBar />
</div>
  )
}

export default DesktopPapers