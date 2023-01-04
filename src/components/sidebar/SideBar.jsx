import DownArrowIcon from "../icon/DownArrowIcon";
import SwitchIcon from "../icon/SwitchIcon";
import DashboardIcon from "../icon/DashboardIcon";
import "./sidebar.scss"
import UserIcon from "../icon/UserIcon";

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
                    <h4 className="switch-text">Dashboard</h4>
                </div>
                <h4 className="customer">CUSTOMERS</h4>
                <div className="switch users">
                    <div className="switchIcon">
                        <UserIcon />
                    </div>
                    <h4 className="switch-text">Users</h4>
                </div>
            </div>
           
        </div>
     );
}
 
export default SideBar;