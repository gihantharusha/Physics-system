import BottomNavigationBar from "./components/BottomNavigationBar"
import "./mobileLeaderBoard.css"
import PersonIcon from "../Assets/Icons/person.svg"

const MobileLeaderBoard = () => {
  return (
    <div className="mobile-leader-board" >
        <div className="container">
            <h1 className="mobile-title">
                Leader Board
            </h1>

        </div>
        <BottomNavigationBar active={3} />
    </div>
  )
}

export default MobileLeaderBoard