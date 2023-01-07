import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import Widget from "../../components/widget/Widget";
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
                    <h1 className="user">Users</h1>
                    <div className="widgets">
                        <Widget type="users" />
                        <Widget type="active" />
                        <Widget type="loan" />
                        <Widget type="savings" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;