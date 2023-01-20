import ArrocwIcon from "../../components/icon/ArrowIcon";
import Avatar from "../../components/icon/AvatarIcon";
import Hr from "../../components/icon/Hr";
import Star1Icon from "../../components/icon/Star1Icon";
import Star2Icon from "../../components/icon/Star2Icon";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
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
                    <section>
                       <div className="personal-information-card">
                        <h1>Personal Information</h1>
                       </div>
                    </section>

                   
                    
                </div>

           </section>
        </div>
     );
}
 
export default UserDetails;