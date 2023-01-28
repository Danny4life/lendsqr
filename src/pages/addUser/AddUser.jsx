import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import UserService from "../../services/UserService";
import "./adduser.scss";

const AddUser = () => {

    const [userDetails, setUserDetails] = useState({
        id : "",
        fullName : "",
        phoneNumber : "",
        email : "",
        bvn : "",
        gender : "",
        status : "",
        child : "",
        residence : "",
    });

    const handleChange = (e) => {

        const value = e.target.value;
        setUserDetails({ ...userDetails, [e.target.name] : value });

    }

    const saveUserDetails = (e) => {
        e.preventDefault();
        UserService.saveUserDetails(userDetails).then((response) => {
            setUserDetails(response);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })

    }
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
                                        <input 
                                        type="text" 
                                        id="fullName" 
                                        name="fullName" 
                                        value={userDetails.fullName}
                                        onChange={(e) => handleChange(e)}
                                        required />

                                        <label htmlFor="phoneNumber">phone Number</label>
                                        <input 
                                        type="number" 
                                        id="phoneNumber" 
                                        name="phoneNumber" 
                                        value={userDetails.phoneNumber}
                                        onChange={(e) => handleChange(e)}
                                        required />

                                        <label htmlFor="email">Email</label>
                                        <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={userDetails.email}
                                        onChange={(e) => handleChange(e)} 
                                        required />
                                    </div>

                                    <div className="form-control-2">
                                        <label htmlFor="bvn">BVN</label>
                                        <input 
                                        className="bvn-input" 
                                        type="number" 
                                        id="bvn" 
                                        name="bvn"
                                        value={userDetails.bvn}
                                        onChange={(e) => handleChange(e)}
                                         required />

                                        <label htmlFor="gender">Gender</label>
                                        <input 
                                        className="gender" 
                                        type="text" 
                                        id="gender" 
                                        name="gender"
                                        value={userDetails.gender}
                                        onChange={(e) => handleChange(e)} />

                                        <label className="label-status" htmlFor="status">Marital Status</label>
                                        <input 
                                        className="status" 
                                        type="text" 
                                        id="status" 
                                        name="status" 
                                        value={userDetails.status}
                                        onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="form-control-3">
                                        <label htmlFor="child">Children</label>
                                        <input 
                                        className="child-input" 
                                        type="text" 
                                        id="child" 
                                        name="child"
                                        value={userDetails.child}
                                        onChange={(e) => handleChange(e)} />

                                        <label htmlFor="residece">Type of Residence</label>
                                        <input 
                                        type="text" 
                                        id="residence" 
                                        name="residence" 
                                        value={userDetails.residence}
                                        onChange={(e) => handleChange(e)}
                                        required />
                                    </div>

                                    <div className="submit">
                                        <button 
                                         className="save-btn"
                                         onClick={(e) => saveUserDetails(e)}
                                         >
                                            Save
                                        </button>
                                         <button className="clear-btn">Clear</button>
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