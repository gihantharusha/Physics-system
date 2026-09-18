import MobileLeaderBoard from "../mobile/MobileLeaderBoard";
import "./leaderBoard.css";
const LeaderBoard = () => {
  return (
    <div className="leader-board">
      <section className="desktop">
      </section>
      <section className="mobile">
        <MobileLeaderBoard />

      </section>
    </div>
  );
};

export default LeaderBoard;
