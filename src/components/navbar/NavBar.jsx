import img1 from "../../images/turin.jpeg"
import NotificationIcon from "../icon/NotificationIcon";
import SearchIcon from "../icon/SearchIcon";
import Logo from "../logo/Logo";
import "./navbar.scss"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import AccountCircle from "@mui/icons-material/AccountCircle";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="left-logo">
                <div className="logo">
                    <Logo />
                </div>
                <h1 data-testid="logo-text" className="logo-text">lendsqr</h1>
                <div className="search">
                    <input type="text" placeholder="Search for anything" />
                    <button><SearchIcon /></button>
                </div>
                <div className="nav-items">
                    <a data-testid="doc" href="/" className="nav-docs">Docs</a>
                    <div className="notification">
                        <NotificationIcon />
                    </div>
                    <div className="username">
                        <img className="img1" src={img1} alt="img" />
                        {/* <AccountCircle className="img1" /> */}
                        <span className="nav-text">John Doe</span>
                        <span><ArrowDropDownIcon /></span>
                    </div>  
                </div>
            </div> 
        </nav>
     );
}
 
export default NavBar;