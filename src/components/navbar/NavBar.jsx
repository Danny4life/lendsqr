import img1 from "../../images/turin.jpeg"
import NotificationIcon from "../icon/NotificationIcon";
import SearchIcon from "../icon/SearchIcon";
import Logo from "../logo/Logo";
import "./navbar.scss"

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="left-logo">
                <div className="logo">
                    <Logo />
                </div>
                <h1 className="logo-text">lendsqr</h1>
                <div className="search">
                    <input type="text" placeholder="Search for anything" />
                    <button><SearchIcon /></button>
                </div>
                <div className="nav-items">
                    <a href="/" className="docs">Docs</a>
                    <div className="notification">
                        <NotificationIcon />
                    </div>
                    <img className="img1" src={img1} alt="img"/>
                    
                </div>
            </div> 
        </nav>
    
     );
}
 
export default NavBar;