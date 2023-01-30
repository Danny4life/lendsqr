
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import UserService from "../../services/UserService";
import "./adduser.scss";

const AddUser = () => {

    const [userDetails, setUserDetails] = useState({
        id : "",
        fullName : "",
        phoneNumber : "",
        emailAdd : "",
        bvn : "",
        type_of_residence : "",
        gender : "",
        maritalStatus : "",
        children : "",
    });

    const handleChange = (e) => {

       // const value = e.target.value;
        setUserDetails({...userDetails, [e.target.name] : e.target.value});

    }


    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await UserService.getUserInformationById(id);
                setUserDetails(response.data);
            }catch(error){
                console.log(error);

            }
        }

        fetchData()
    }, []);

    const navigate = useNavigate();

    const saveUserDetails = (e) => {
        e.preventDefault();
        UserService.saveUserDetails(userDetails).then((response) => {
            setUserDetails(response);
            // console.log(response);
            navigate("/userDetail");

        })
        .catch((error) => {
            console.log(error);
      })  

    //   setUserDetails(" ");
    }

    const reset = (e) => {
        e.preventDefault();

        setUserDetails({
            id : "",
            fullName : "",
            phoneNumber : "",
            emailAdd : "",
            bvn : "",
            type_of_residence : "",
            gender : "",
            maritalStatus : "",
            children : "",
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
                            <form action="" method="" onSubmit={saveUserDetails}>
                                <fieldset>
                                    <legend>Personal Information</legend>
                                    <div className="form-control-1">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input 
                                        type="text" 
                                        name="fullName" 
                                        value={userDetails.fullName}
                                        id="fullName" 
                                        onChange={(e) => handleChange(e)}
                                        required />

                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input 
                                        type="number" 
                                        name="phoneNumber" 
                                        value={userDetails.phoneNumber}
                                        id="phoneNumber" 
                                        onChange={(e) => handleChange(e)}
                                        required />

                                        <label htmlFor="emailAdd">Email</label>
                                        <input 
                                        type="email"  
                                        name="emailAdd"
                                        value={userDetails.emailAdd}
                                        id="emailAdd" 
                                        onChange={(e) => handleChange(e)} 
                                        required />
                                    </div>

                                    <div className="form-control-2">
                                        <label htmlFor="bvn">BVN</label>
                                        <input 
                                        className="bvn-input" 
                                        type="number" 
                                        name="bvn"
                                        value={userDetails.bvn}
                                        id="bvn" 
                                        onChange={(e) => handleChange(e)}
                                         required />

                                        <label htmlFor="gender">Gender</label>
                                        <input 
                                        className="gender" 
                                        type="text"
                                        name="gender"
                                        value={userDetails.gender}
                                        id="gender" 
                                        onChange={(e) => handleChange(e)} />

                                        {/* <label htmlFor="gender">Gender</label>
                                        <select name="gender" id="gender" value={userDetails.gender} onChange={(e) => handleChange(e)}>
                                           
                                            <option>MALE</option>
                                            <option>FEMALE</option>

                                        </select> */}

                                        <label className="label-status" htmlFor="martitaStatus">Marital Status</label>
                                        <input 
                                        className="status" 
                                        type="text" 
                                        name="maritalStatus" 
                                        value={userDetails.maritalStatus}
                                         id="maritalStatus" 
                                        onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="form-control-3">
                                        <label htmlFor="children">Children</label>
                                        <input 
                                        className="child-input" 
                                        type="text" 
                                        name="children"
                                        value={userDetails.children}
                                        id="children" 
                                        onChange={(e) => handleChange(e)} />

                                        <label htmlFor="type_of_residece">Type of Residence</label>
                                        <input 
                                        type="text" 
                                        name="type_of_residence" 
                                        value={userDetails.type_of_residence}
                                        id="type_of_residence" 
                                        onChange={(e) => handleChange(e)}
                                        required />
                                    </div>

                                    <div className="submit">
                                        <button 
                                         className="save-btn"
                                         onSubmit={(e) => saveUserDetails(e)}
                                         >
                                            Save
                                        </button>
                                         <button 
                                         className="clear-btn"
                                         onClick={(e) => reset(e)}
                                         >
                                            Clear
                                        </button>
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