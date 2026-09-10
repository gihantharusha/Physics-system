import DesktopPapers from "../desktop/DesktopPapers";
import MobilePapers from "../mobile/MobilePapers";
import "./papers.css";

const Papers = () => {
  return (
    <div className="papers">
      <div className="desktop">
        <DesktopPapers />
      </div>
      <div className="mobile">
        <MobilePapers />
      </div>
    </div>
  );
};

export default Papers;
