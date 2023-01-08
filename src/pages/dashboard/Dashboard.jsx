import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import Widget from "../../components/widget/Widget";
import "./dashboard.scss"

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <header>
                <NavBar />
            </header>
           
            <div className="dashboard-container">
                <div className="left">
                    <aside>
                        <SideBar />
                    </aside>
                       
                </div>
              
                <div className="right">
                    <section>
                        <h1 className="user">Users</h1>
                        <div className="widgets">
                            <Widget type="users" />
                            <Widget type="active" />
                            <Widget type="loan" />
                            <Widget type="savings" />
                        </div>
                    </section>
                </div>
            </div>

        </div>
     );
}
 
export default Dashboard;