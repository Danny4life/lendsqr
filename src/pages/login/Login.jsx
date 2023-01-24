 import { useState } from "react";
//import FormInput from "../../components/formInput/FormInput";
import Logo from "../../components/logo/Logo";
import img1 from "../../images/login.png";
import UserService from "../../services/UserService";
import "./login.scss";


const Login = () => {

    const [values, setValues] = useState({
        id : "",
        email : "",
        password : "",
    });

    const onChnage = (e) => {
        
        // const value = e.target.value;
        setValues({...values, [e.target.name] : e.target.value});
    }


    const saveUser = (e) => {
        e.preventDefault();
        UserService.saveUser(values).then((response) => {
            setValues(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return ( 
        <section className="login">
            <section className="login-left">
                <header className="left-logo">
                    <div className="logo">
                        <Logo />
                    </div>
                    <h1 data-testid="logo-text" className="logo-text">lendsqr</h1>
                </header>
                <div className="login-img">
                    <img className="img1" src={img1} alt="" />
                   
                </div>    
            </section>
            <section className="login-right">
                <div className="right-container">
                    <header>
                        <h1 className="welcome">
                            Welcome!
                        </h1>
                        <h4 className="details">
                            Enter details to login.
                        </h4>
                    </header> 
                    <form className="form-container">
                        <div>
                            <input 
                            type="text"
                            name="email"
                            value={values.email} 
                            onChange={(e) => onChnage(e)}
                            placeholder="Email" 
                            />
                            <input 
                            type="password" 
                            name="password"
                            value={values.password}
                            onChange={(e) => onChnage(e)}
                            placeholder="Password" 
                            />
                        </div>
                        
                        <p className="show-container">
                            <span className="show-item">show</span>
                        </p>
                        <div className="div-container">
                            <span className="password">Forgot Password?</span>
                            <button onClick={(e) => saveUser(e)}>LOG IN</button>
                        </div>
                    </form>     
                </div>             
            </section>
        </section>
     );
}
 
export default Login;