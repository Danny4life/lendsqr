 import Logo from "../../components/logo/Logo";
import img1 from "../../images/login.png"
import "./login.scss"




const Login = () => {
    return ( 
        <div className="login">
            <div className="left">
                <div className="left-logo">
                    <div className="logo`">
                        <Logo />
                    </div>
                    <h1 className="logo-text">lendsqr</h1>
                </div>
                <div className="login-img">
                    <img className="img1" src={img1} alt="" />
                   
                </div>    
            </div>
            <div className="right">
                <div className="right-container">
                    <h1 className="welcome">
                        Welcome!
                    </h1>
                    <h4 className="details">
                        Enter details to login.
                    </h4>     
                </div>
                
            </div>
        </div>
     );
}
 
export default Login;