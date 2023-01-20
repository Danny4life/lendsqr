import ArrocwIcon from "../../components/icon/ArrowIcon";
import Avatar from "../../components/icon/AvatarIcon";
import Hr from "../../components/icon/Hr";
import Star1Icon from "../../components/icon/Star1Icon";
import Star2Icon from "../../components/icon/Star2Icon";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import Horrizontal from "../../svg/Horrizontal";
import "./userdetails.scss"

const UserDetails = () => {
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
                        <div className="user-detail-container">
                            <div className="user-details-items">
                                <div><Avatar /></div>
                                <div>
                                    <h4 className="user-details-name">Grace Effiom</h4>
                                    <p><span className="users-id">LSQF587g90</span></p>
                                </div>
                                <span><Hr /></span>
                                <div>
                                    <h4 className="users-tier">User's Tier</h4>
                                    <span><Star1Icon /></span>
                                    <span><Star2Icon /></span>
                                    <span><Star2Icon /></span>
                                </div>
                                <span><Hr /></span>
                                <div>
                                    <h2 className="users-balance">₦200,000,00</h2>
                                    <p><span className="users-bank">9912345678/Providus Bank</span></p>
                                </div>
                            </div>
                            <div className="users-general-details">
                                <span className="details general">General Details</span>
                                <span className="details">Documents</span>
                                <span className="details">Bank Details</span>
                                <span className="details">Loans</span>
                                <span className="details">Savings</span>
                                <span className="details">App and Systems</span>
                            </div>
                           
                        </div>
                        <div >
                            <hr className="new" />
                        </div>
                       
                    </section>
                    <section className="card">
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
                                <Horrizontal />
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
                                <Horrizontal />
                            </div>
                       </div>
                      
                    </section>     
                    
                </div>

           </section>
        </div>
     );
}
 
export default UserDetails;