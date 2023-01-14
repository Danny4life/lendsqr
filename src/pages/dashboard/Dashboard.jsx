import DataTable from "../../components/datatable/DataTable";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import Widget from "../../components/widget/Widget";

import "./dashboard.scss"

const Dashboard = () => {
    return ( 
        <section className="dashboard">
            <nav>
                <NavBar />
            </nav>
           
            <section className="dashboard-container">
                <div className="left">
                    <aside>
                        <SideBar />
                    </aside>
                       
                </div>
              
                <section className="right">
                    <section className="widget-section">
                        <h1 data-testid="user-text" className="user">Users</h1>
                        <div data-testid="widgets" className="widgets">
                            <Widget type="users" />
                            <Widget type="active" />
                            <Widget type="loan" />
                            <Widget type="savings" />
                        </div>
                    </section>

                    <section>
                        <div className="tableContainer">
                            <DataTable />
                        </div>   
                    </section>
                </section>
            </section>
        </section>
     );
}
 
export default Dashboard;