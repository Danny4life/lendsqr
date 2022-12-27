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
            </div> 
        </nav>
    
     );
}
 
export default NavBar;