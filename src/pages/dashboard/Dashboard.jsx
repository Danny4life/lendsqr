import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./dashboard.scss"

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <NavBar />
            <div className="dashboard-container">
                <SideBar />
            </div>

        </div>
     );
}
 
export default Dashboard;