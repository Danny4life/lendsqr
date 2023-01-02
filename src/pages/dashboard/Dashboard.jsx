import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./dashboard.scss"

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <NavBar />
            <div className="dashboard-container">
                <div className="left">
                        <SideBar />
                    </div>
                    <div className="right">
                        hello dashboard
                    </div>
            </div>
        </div>
     );
}
 
export default Dashboard;