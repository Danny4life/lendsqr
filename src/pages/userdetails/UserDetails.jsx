import ArrocwIcon from "../../components/icon/ArrowIcon";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./userdetails.scss"

const UserDetails = () => {
    return ( 
        <section className="userdetails">
           <nav>
             <NavBar />
           </nav>

           <section className="userDetail-container">
                <div className="left">
                    <aside>
                        <SideBar />
                    </aside>
                </div>
                
                <div className="right">
                    <section>
                        <div className="users">
                            <span>
                                <ArrocwIcon />
                            </span>
                            <span className="userItem">Back to Users</span>
                        </div>
                        <div className="container">
                            <h2 className="container-detail">User Details</h2>
                            <div className="para-container">
                                <p className="para">BLACKLIST USER</p>
                                <p className="para activate">ACTIVATE USER</p>
                            </div>
                        </div>
                    </section>
                    
                </div>

           </section>
        </section>
     );
}
 
export default UserDetails;