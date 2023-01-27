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
                    <div className="card">
                        <form action="" method="">
                          
                                <h2>Personal Information</h2>

                                <label for="full name">Full Name</label>
                                <input type="text" id="full name" name="full name" />

                                <label for="phone">Phone Number</label>
                                <input type="number" id="phone" name="phone" />

                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" />

                                <label for="bvn">BVN</label>
                                <input type="number" id="bvn" name="bvn" />

                                <label for="gender">Gender</label>
                               <select name="gender">
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                               </select>

                               <label for="status">Marital Status</label>
                               <select name="status">
                                <option value="Female">Single</option>
                                <option value="Male">Married</option>
                               </select>

                               <label for="children">Children</label>
                               <select name="children">
                                <option value="Female">None</option>
                                <option value="Male">Yes</option>
                               </select>

                               <label for="residence">Type Of Residence</label>
                                <input type="text" id="residence" name="residence" />



                           
                         </form>
                    </div>              
                </div>

            </section>
           
        </div>
     );
}
 
export default AddUser;