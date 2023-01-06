import WidgetIcon1 from "../../components/icon/WidgetIcon1";
import WidgetIcon2 from "../../components/icon/WidgetIcon2";
import WidgetIcon3 from "../../components/icon/WidgetIcon3";
import WidgetIcon4 from "../../components/icon/WidgetIcon4";
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
                            <div className="box">
                                <div className="box-items">
                                    <div className="widgetIcon">
                                        <WidgetIcon2 />
                                    </div>
                                    <h4 className="widget-users">Active users</h4>
                                    <h1 className="widget-users-figure">2,453</h1>
                                </div>    
                            </div>
                            <div className="box">
                                <div className="box-items">
                                    <div className="widgetIcon">
                                        <WidgetIcon3 />
                                    </div>
                                    <h4 className="widget-users">Users with loans</h4>
                                    <h1 className="widget-users-figure">12,453</h1>
                                </div>    
                            </div>
                            <div className="box">
                                <div className="box-items">
                                    <div className="widgetIcon">
                                        <WidgetIcon4 />
                                    </div>
                                    <h4 className="widget-users">Users with savings</h4>
                                    <h1 className="widget-users-figure">102,453</h1>
                                </div>    
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Dashboard;