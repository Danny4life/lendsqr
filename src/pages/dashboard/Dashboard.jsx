import WidgetIcon1 from "../../components/icon/WidgetIcon1";
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
                        <h1 className="user">Users</h1>

                        <div className="widgets">
                            <div className="box">
                                <div className="box-items">
                                    <div className="widgetIcon">
                                        <WidgetIcon1 />
                                    </div>
                                    <h4 className="widget-users">Users</h4>
                                    <h1 className="widget-users-figure">2,453</h1>

                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Dashboard;