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
import OrganizationIcon from "../icon/OrganizationIcon";
import SavingsProductIcon from "../icon/SavingsProductIcon";
import FeesIcon from "../icon/FeesIcon";

const SideBar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-item">
                    <div className="icon">
                        <SwitchIcon />
                    </div>
                    <h4 className="sidebar-text">Switch Organization</h4>
                    <div className="downArrowIcon">
                        <DownArrowIcon />
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <DashboardIcon />
                    </div>
                    <h4 className="sidebar-text">Dashboard</h4>
                </div>
                <h4 className="title">CUSTOMERS</h4>
                <div className="sidebar-item users">
                    <div className="icon">
                        <UserIcon />
                    </div>
                    <h4 className="sidebar-text">Users</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <GaurantorIcon />
                    </div>
                    <h4 className="sidebar-text">Gaurantors</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <LoanIcon />
                    </div>
                    <h4 className="sidebar-text">Loans</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <ModelIcon />
                    </div>
                    <h4 className="sidebar-text">Decision Models</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <SavingsIcon />
                    </div>
                    <h4 className="sidebar-text">Savings</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <RequestIcon />
                    </div>
                    <h4 className="sidebar-text">Loan Requests</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <WhitelistIcon />
                    </div>
                    <h4 className="sidebar-text">Whitelist</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <KarmaIcon />
                    </div>
                    <h4 className="sidebar-text">Karma</h4>
                </div>
                <h4 className="title">BUSINESSES</h4>
                <div className="sidebar-item">
                    <div className="icon">
                        <OrganizationIcon />
                    </div>
                    <h4 className="sidebar-text">Organization</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <RequestIcon />
                    </div>
                    <h4 className="sidebar-text">Loan products</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <SavingsProductIcon />
                    </div>
                    <h4 className="sidebar-text">Savings products</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <FeesIcon />
                    </div>
                    <h4 className="sidebar-text">Fees and Charges</h4>
                </div>
                
            </div>
           
        </div>
     );
}
 
export default SideBar;