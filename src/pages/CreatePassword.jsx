import DesktopCreatePassword from "../desktop/DesktopCreatePassword"
import MobileCreatePassword from "../mobile/MobileCreatePassword"
import "./createPassword.css"

const CreatePassword = () => {
  return (
    <div className="create-password">
        <div className="desktop">
            <DesktopCreatePassword />
        </div>
        <div className="mobile">
            <MobileCreatePassword />
        </div>
    </div>
  )
}

export default CreatePassword