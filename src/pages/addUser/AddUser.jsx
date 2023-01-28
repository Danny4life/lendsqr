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

                    <h2 className="hero-header">Enter Your Details</h2>
                        <div className="card">
                            <form action="" method="">
                                <fieldset>
                                    <legend>Personal Information</legend>
                                    <div className="form-control-1">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" id="fullName" name="fullName" required />

                                        <label htmlFor="phoneNumber">phone Number</label>
                                        <input type="number" id="phoneNumber" name="phoneNumber" required />

                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" required />
                                    </div>

                                    <div className="form-control-2">
                                        <label htmlFor="bvn">BVN</label>
                                        <input className="bvn-input" type="number" id="bvn" name="bvn" required />

                                        <label htmlFor="gender">Gender</label>
                                        <input className="gender" type="text" id="gender" name="gender" />

                                        <label className="label-status" htmlFor="status">Marital Status</label>
                                        <input className="status" type="text" id="status" name="status" />
                                    </div>

                                    <div className="form-control-3">
                                        <label htmlFor="child">Children</label>
                                        <input className="child-input" type="text" id="child" name="child" />

                                        <label htmlFor="residece">Type of Residence</label>
                                        <input type="text" id="residence" name="residence" required />
                                    </div>

                                    <div className="submit">
                                         <input className="submit-input" type="submit" value="submit" />
                                    </div>


                                   
                                                        
                                </fieldset>
                            </form>
                        </div>              
                </div>

            </section>
           
        </div>
     );
}
 
export default AddUser;