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
            </div> 
        </nav>
    
     );
}
 
export default NavBar;