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
                    hello right
                    </section>
                    
                </div>

           </section>
        </section>
     );
}
 
export default UserDetails;