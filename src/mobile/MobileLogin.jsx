import { Link, useNavigate } from "react-router-dom"
import "./mobileLogin.css"

const MobileLogin = () => {

    const navigate = useNavigate()

  return (
    <div className="mobile-login">
        <div className="container">
            <h1 className="mobile-title" >Login to your account</h1>
            <section className="fields">
                <input type="text" className="input-fields"  placeholder="Register number" />
                <input type="password" className="input-fields" placeholder="Password" />
            </section>
            <button className="button" onClick={()=>navigate(`/notification/12345`)} >Login</button>
            <p>
                Don't have an account? 
                <Link className="link" to={"/register"} > Register</Link>
            </p>
        </div>
    </div>
)
}

export default MobileLogin