import { useNavigate } from "react-router-dom";
import ArrocwIcon from "../../components/icon/ArrowIcon";
import Avatar from "../../components/icon/AvatarIcon";
import Hr from "../../components/icon/Hr";
import Star1Icon from "../../components/icon/Star1Icon";
import Star2Icon from "../../components/icon/Star2Icon";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import UserDetailsContainer from "../../components/userDetails/UserDetailsContainer";
//import UsersInformation from "../../components/userDetails/UsersInformation";
//import Horrizontal from "../../svg/Horrizontal";
import "./userdetails.scss"

const UserDetails = () => {


    const navigate = useNavigate();
    return ( 
        <div className="userdetails">
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
                            <span onClick={() => navigate("/userPage")}>
                                <ArrocwIcon />
                            </span>
                            <span onClick={() => navigate("/userPage")} className="userItem">Back to Users</span>
                        </div>
                        <div className="container">
                            <h2 className="container-detail">User Details</h2>
                            <div className="para-container">
                                <p className="para">BLACKLIST USER</p>
                                <p onClick={() => navigate("/addUser")} className="para activate">ACTIVATE USER</p>
                            </div>
                        </div>
                        <UserDetailsContainer 
                            avatar={<Avatar />} 
                            hr={<Hr />} 
                            star={<Star1Icon />} 
                            star2={<Star2Icon />} 
                        />
                        
                        <div >
                            <hr className="new" />
                        </div>
                       
                    </section>
                    <section className="card">
                        {/* <UsersInformation horrizontal={<Horrizontal />} /> */}
                        <div className="">
                            <h1 className="card-heading">Personal Information</h1>
                            <div className="card-title-container">
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">FULL NAME</h4>
                                    <h3 className="card-details shift">Grace Effiom</h3>
                                    <h4 className="card-title">MARITAL STATUS</h4>
                                    <h3 className="card-details">Single</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">PHONE NUMBER</h4>
                                    <h3 className="card-details shift">07065634728</h3>
                                    <h4 className="card-title">CHILDREN</h4>
                                    <h3 className="card-details">None</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">EMAIL ADDRESS</h4>
                                    <h3 className="card-details shift">grace@gmail.com</h3>
                                    <h4 className="card-title">TYPE OF RESIDENCE</h4>
                                    <h3 className="card-details">Parent's Apartment</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">BVN</h4>
                                    <h3 className="card-details">444123456879</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">GENDER</h4>
                                    <h3 className="card-details">Female</h3>
                                </div>          
                            </div> 
                                    <div className="hr">
                                        {/* {horrizontal} */}
                                        <hr />   
                                    </div>
                        </div>

                        <div className="">
                            <h1 className="card-heading">Education and Employment</h1>
                            <div className="card-title-container">
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">LEVEL OF EDUCATION</h4>
                                    <h3 className="card-details shift">B.Sc</h3>
                                    <h4 className="card-title">OFFICE EMAIL</h4>
                                    <h3 className="card-details">grace@lendsqr.com</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">EMPLOYMENT STATUS</h4>
                                    <h3 className="card-details shift">Employed</h3>
                                    <h4 className="card-title">MONTHLY INCOME</h4>
                                    <h3 className="card-details">₦200,000 - ₦400,000</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">SECTOR OF EMPLOYMENT</h4>
                                    <h3 className="card-details shift">FinTech</h3>
                                    <h4 className="card-title">LOAN REPAYMENT</h4>
                                    <h3 className="card-details">₦40,000</h3>
                                </div>
                                <div className="card-details-wrapper">
                                    <h4 className="card-title">DURRATION OF EMPLOYMENT</h4>
                                    <h3 className="card-details">2 years</h3>
                                </div>        
                            </div> 
                                <div className="hr">
                                    {/* {horrizontal} */}
                                    <hr />
                                </div>
                         </div>

                        <div className="">
                            <h1 className="card-heading">Socials</h1>
                            <div className="card-title-container-2">
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">TWITTER</h4>
                                    <h3 className="card-details-2">@grace_effiom</h3>
                                </div>
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">FACEBOOK</h4>
                                    <h3 className="card-details-2">grace effiom</h3>
                                </div>
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">INSTAGRAM</h4>
                                    <h3 className="card-details-2">@grace_effiom</h3>
                                </div>        
                            </div> 
                                <div className="hr">
                                    {/* {horrizontal} */}
                                    <hr />
                                </div>
                        </div>

                        <div className="gaurantor-container">
                            <h1 className="card-heading">Gaurantor</h1>
                            <div className="card-title-container-2">
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">FULL NAME</h4>
                                    <h3 className="card-details-2">Debby Oganna</h3>
                                </div>
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">PHONE NUMBER</h4>
                                    <h3 className="card-details-2">0807365242</h3>
                                </div>
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">EMAIL ADDRESS</h4>
                                    <h3 className="card-details-2">debby@gmail.com</h3>
                                </div> 
                                <div className="card-details-wrapper-2">
                                    <h4 className="card-title-2">RELATIONSHIP</h4>
                                    <h3 className="card-details-2">Sister</h3>
                                </div>        
                            </div> 
                                <div className="hr hr-2">
                                    {/* {horrizontal} */}
                                    <hr />
                                </div>
                        </div>

                        <div className="card-title-container-2">
                            <div className="card-details-wrapper-2">
                                <h4 className="card-title-2">FULL NAME</h4>
                                <h3 className="card-details-2">Jane Fred</h3>
                            </div>
                            <div className="card-details-wrapper-2">
                                <h4 className="card-title-2">PHONE NUMBER</h4>
                                <h3 className="card-details-2">0807365242</h3>
                            </div>
                            <div className="card-details-wrapper-2">
                                <h4 className="card-title-2">EMAIL ADDRESS</h4>
                                <h3 className="card-details-2">janny@gmail.com</h3>
                            </div> 
                            <div className="card-details-wrapper-2">
                                <h4 className="card-title-2">RELATIONSHIP</h4>
                                <h3 className="card-details-2">Friend</h3>
                            </div>        
                        </div>        
                    </section>         
                </div>
           </section>
        </div>
     );
}
 
export default UserDetails;