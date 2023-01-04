import DownArrowIcon from "../icon/DownArrowIcon";
import SwitchIcon from "../icon/SwitchIcon";
import DashboardIcon from "../icon/DashboardIcon";
import "./sidebar.scss"
import UserIcon from "../icon/UserIcon";
import GaurantorIcon from "../icon/GaurantorIcon";
import LoanIcon from "../icon/LoanIcon";
import ModelIcon from "../icon/ModelIcon";
import SavingsIcon from "../icon/SavingsIcon";
import RequestIcon from "../icon/RequestIcon";
import WhitelistIcon from "../icon/WhitelistIcon";
import KarmaIcon from "../icon/KarmaIcon";

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
                <div className="switch">
                    <div className="switchIcon">
                        <SavingsIcon />
                    </div>
                    <h4 className="switch-text">Savings</h4>
                </div>
                <div className="switch">
                    <div className="switchIcon">
                        <RequestIcon />
                    </div>
                    <h4 className="switch-text">Loan Requests</h4>
                </div>
                <div className="switch">
                    <div className="switchIcon">
                        <WhitelistIcon />
                    </div>
                    <h4 className="switch-text">Whitelist</h4>
                </div>
                <div className="switch">
                    <div className="switchIcon">
                        <KarmaIcon />
                    </div>
                    <h4 className="switch-text">Karma</h4>
                </div>
                
            </div>
           
        </div>
     );
}
 
export default SideBar;