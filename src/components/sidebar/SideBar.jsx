import DownArrowIcon from "../icon/DownArrowIcon";
import SwitchIcon from "../icon/SwitchIcon";
import DashboardIcon from "../icon/DashboardIcon";
import "./sidebar.scss"
import UserIcon from "../icon/UserIcon";
import GaurantorIcon from "../icon/GaurantorIcon";
import LoanIcon from "../icon/LoanIcon";
import ModelIcon from "../icon/ModelIcon";

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
                <div className="switch">
                    <div className="switchIcon">
                        <GaurantorIcon />
                    </div>
                    <h4 className="switch-text">Gaurantors</h4>
                </div>
                <div className="switch">
                    <div className="switchIcon">
                        <LoanIcon />
                    </div>
                    <h4 className="switch-text">Loans</h4>
                </div>
                <div className="switch">
                    <div className="switchIcon">
                        <ModelIcon />
                    </div>
                    <h4 className="switch-text">Decision Models</h4>
                </div>
                
            </div>
           
        </div>
     );
}
 
export default SideBar;