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
import TransactionIcon from "../icon/TransactionIcon";
import ServiceIcon from "../icon/ServiceIcon";
import ServiceAccountIcon from "../icon/ServiceAccountIcon";
import SettlementIcon from "../icon/SettlementIcon";
import ReportIccon from "../icon/ReportIcon";
import PreferenceIcon from "../icon/PreferenceIcon";
import PricingIcon from "../icon/PricingIcon";
import AuditIcon from "../icon/AuditIcon";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    

    const navigate = useNavigate();
    return ( 
     <aside className="sidebar">
         <nav>
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
                    <h4 onClick={() => navigate("/dashboard")} className="sidebar-text">Dashboard</h4>
                </div>
                <h4 className="title">CUSTOMERS</h4>
                <div className="sidebar-item users">
                    <div className="icon">
                        <UserIcon />
                    </div>
                    <h4 onClick={() => navigate("/userDetail")} className="sidebar-text">Users</h4>
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
                <div className="sidebar-item">
                    <div className="icon">
                        <TransactionIcon />
                    </div>
                    <h4 className="sidebar-text">Transactions</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <ServiceIcon />
                    </div>
                    <h4 className="sidebar-text">Services</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <ServiceAccountIcon />
                    </div>
                    <h4 className="sidebar-text">Service Account</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <SettlementIcon />
                    </div>
                    <h4 className="sidebar-text">Settlements</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <ReportIccon />
                    </div>
                    <h4 className="sidebar-text">Reports</h4>
                </div>
                <h4 className="title">SETTINGS</h4>
                <div className="sidebar-item">
                    <div className="icon">
                        <PreferenceIcon />
                    </div>
                    <h4 className="sidebar-text">Preferences</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <PricingIcon />
                    </div>
                    <h4 className="sidebar-text">Fees and Pricing</h4>
                </div>
                <div className="sidebar-item">
                    <div className="icon">
                        <AuditIcon />
                    </div>
                    <h4 className="sidebar-text">Audit Logs</h4>
                </div>           
            </div>
        </nav>
     </aside>
     );
}
 
export default SideBar;