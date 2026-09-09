import DesktopAdvanceDetails from "../desktop/DesktopAdvanceDetails"
import MobileAdvanceDetails from "../mobile/MobileAdvanceDetails"
import "./advanceDetails.css"

const AdvanceDetails = () => {
  return (
    <div className="advanceDetails" >
        <div className="desktop">
            <DesktopAdvanceDetails />
        </div>
        <div className="mobile">
            <MobileAdvanceDetails />
        </div>
    </div>
  )
}

export default AdvanceDetails