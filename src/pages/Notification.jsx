import "./notification.css"
import DesktopNotification from "../desktop/DesktopNotification"
import MobileNotification from "../mobile/MobileNotification"

const Notification = () => {
  return (
    <div className="notification">
        <div className="desktop">
          <DesktopNotification />
        </div>
        <div className="mobile">
          <MobileNotification />
        </div>
    </div>
  )
}

export default Notification