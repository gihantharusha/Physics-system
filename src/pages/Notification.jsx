import "./notification.css"
import DesktopNotification from "../desktop/DesktopNotification"
import MobileNotification from "../mobile/MobileNotification"
import { useEffect } from "react"

const Notification = () => {

  const on_load = async()=>{
    
  }

  useEffect(()=>{
    on_load()
  })

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