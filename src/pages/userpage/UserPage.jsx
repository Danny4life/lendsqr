import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import Widget from "../../components/widget/Widget";
import "./userpage.scss"

const userPage = () => {
    return ( 
        <section className="userpage">
            <nav>
                <NavBar />
            </nav>
           <section className="user-container">
                <div className="left">
                    <aside>
                       <SideBar />
                    </aside>
                </div>
                <div className="right">
                    <section className="widget-section">
                        <h1 data-testid="user-text" className="user">Users</h1>
                        <div data-testid="widgets" className="widgets">
                            <Widget type="users" />
                            <Widget type="active" />
                            <Widget type="loan" />
                            <Widget type="savings" />
                        </div>

                    </section>
                </div>
           </section>
        </section>
     );
}
 
export default userPage;