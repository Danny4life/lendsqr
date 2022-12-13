 import Logo from "../../components/logo/Logo";
//  import img1 from "../../images/logo.png"
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
               
                
            </div>
            <div className="right"></div>
        </div>
     );
}
 
export default Login;