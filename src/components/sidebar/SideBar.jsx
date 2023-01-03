import SwitchIcon from "../icon/SwitchIcon";
import "./sidebar.scss"

const SideBar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="switch">
                    <div className="switch-icon">
                        <SwitchIcon />
                    </div>
                    <h4 className="switch-text">Switch Organization</h4>
                </div>
            </div>
           
        </div>
     );
}
 
export default SideBar;