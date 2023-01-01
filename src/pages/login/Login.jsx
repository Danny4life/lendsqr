 import { useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import Logo from "../../components/logo/Logo";
import img1 from "../../images/login.png";
import "./login.scss";




const Login = () => {

    const [values, setValues] = useState({
        email : "",
        password : "",
    });

    const inputs = [
        {
            id : 1,
            name : "email",
            type : "email",
            placeholder : "Email",
            errorMessage : "It should be a valid email address",
            required : true,
        },

        {
            id : 2,
            name : "password",
            type : "password",
            placeholder : "Password",
            errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
            pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ]

    const onChnage = (e) => {
        setValues({...values, [e.target.name] : e.target.value});
        //console.log(values);
    }
    return ( 
        <div className="login">
            <div className="left">
                <div className="left-logo">
                    <div className="logo`">
                        <Logo />
                    </div>
                    <h1 data-testid="logo-text" className="logo-text">lendsqr</h1>
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
                    <form>
                        {inputs.map((input) => (
                            
                            <FormInput key={input.id} {...input} values={values[input.name]}
                            onChnage={onChnage}  />
                        ))}
                        <p className="show-container">
                            <span className="show-item">show</span>
                        </p>
                        <div className="div-container">
                            <span className="password">Forgot Password?</span>
                            <button>LOG IN</button>
                        </div>
                    </form>     
                </div>
                
            </div>
        </div>
     );
}
 
export default Login;