import { useNavigate } from "react-router-dom";
import ArrocwIcon from "../../components/icon/ArrowIcon";
import Avatar from "../../components/icon/AvatarIcon";
import Hr from "../../components/icon/Hr";
import Star1Icon from "../../components/icon/Star1Icon";
import Star2Icon from "../../components/icon/Star2Icon";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import UserDetailsContainer from "../../components/userDetails/UserDetailsContainer";
import UsersInformation from "../../components/userDetails/UsersInformation";
import Horrizontal from "../../svg/Horrizontal";
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
                                <p className="para activate">ACTIVATE USER</p>
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
                        <UsersInformation horrizontal={<Horrizontal />} />
                    </section>     
                    
                </div>

           </section>
        </div>
     );
}
 
export default UserDetails;