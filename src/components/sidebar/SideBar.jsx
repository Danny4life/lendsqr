import DownArrowIcon from "../icon/DownArrowIcon";
import SwitchIcon from "../icon/SwitchIcon";
import DashboardIcon from "../icon/DashboardIcon";
import "./sidebar.scss"

const SideBar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="switch">
                    <div className="switchIcon">
                        <SwitchIcon />
                    </div>
                    <h4 className="switch-text">Switch Organization</h4>
                    <div className="downArrowIcon">
                        <DownArrowIcon />
                    </div>
                </div>
                <div className="switch">
                    <div className="switchIcon">
                        <DashboardIcon />
                    </div>
                    <h4 className="switch-text">Switch Organization</h4>
                    <div className="downArrowIcon">
                        <DownArrowIcon />
                    </div>
                </div>
            </div>
           
        </div>
     );
}
 
export default SideBar;