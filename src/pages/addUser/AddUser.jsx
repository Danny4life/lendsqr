import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./adduser.scss";

const AddUser = () => {
    return ( 
        <div className="addUser">
            <nav>
                <NavBar />
            </nav>

            <section className="addUser-container">
                <div className="left">
                    <aside>
                        <SideBar />
                    </aside>
                </div>

                <div className="right">
                    
                </div>

            </section>
           
        </div>
     );
}
 
export default AddUser;