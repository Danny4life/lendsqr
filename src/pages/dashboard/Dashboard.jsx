//import DashboardTable from "../../components/dashboardTable/DashboardTable";
import DataTable from "../../components/datatable/DataTable";
import NavBar from "../../components/navbar/NavBar";
//import PaginationTable from "../../components/pagination/PaginationTable";
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
                    <section className="widget-section">
                        <h1 className="user">Users</h1>
                        <div className="widgets">
                            <Widget type="users" />
                            <Widget type="active" />
                            <Widget type="loan" />
                            <Widget type="savings" />
                        </div>
                    </section>

                    <section>
                        <div className="tableContainer">
                            {/* <DashboardTable /> */}
                            <DataTable />
                        </div>

                        
                        
                    </section>
                </div>
            </div>

        </div>
     );
}
 
export default Dashboard;