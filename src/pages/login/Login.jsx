 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import img1 from "../../images/login.png";
import UserService from "../../services/UserService";
import "./login.scss";



const Login = () => {

    const [users, setUsers] = useState({
        id : "",
        email : "",
        password : "",
    });

   
    const onChnage = (e) => {
        
        // const value = e.target.value;
        setUsers({...users, [e.target.name] : e.target.value});

        // setEmail(e.target.value);

        // setPassword(e.target.value);
    }

    const navigate = useNavigate()

    

    const saveUser = (e) => {
       e.preventDefault();
        UserService.saveUser(users).then((response) => {
            setUsers(response);
            navigate("/userDetail");
            //console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })

        // setUsers(" ");

        
    }

    const [type, setType] = useState("password");
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        if(type === "password"){
            setShow(true);
            setType("text");
        }else {
            setShow(false);
            setType("password");
        }
    }



    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState(false);

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     navigate("/userDetail");
    // }

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
                    <form action="/" method="/" className="form-container" onSubmit={saveUser}>
                        <div>
                            <div>
                                <input 
                                type="email"
                                name="email"
                                value={users.email} 
                                onChange={(e) => onChnage(e)}
                                placeholder="Email" 
                                required
                                />
                                {/* <p>Email can't be empty</p> */}
                            </div>
                            <div>
                                <input 
                                type={type} 
                                name="password"
                                value={users.password}
                                onChange={(e) => onChnage(e)}
                                placeholder="Password" 
                                required
                                minlength="6"
                                />
                                 {/* <p>Password can't be empty</p> */}
                            </div>
                           
                            
                        </div>
                        
                        <p className="show-container">
                            <span onClick={handleToggle} icon={show} className="show-password">show</span>
                        </p>
                        <div className="div-container">
                            <span className="password">Forgot Password?</span>
                            <button onSubmit={(e) => saveUser(e)}>LOG IN</button>
                        </div>
                    </form>     
                </div>             
            </section>
        </section>
     );
}
 
export default Login;