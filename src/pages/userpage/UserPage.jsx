import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
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
                    hellopage
                </div>
           </section>
        </section>
     );
}
 
export default userPage;