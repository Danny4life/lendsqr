const UserDetailsContainer = ({ avatar, hr, star, star2 }) => {
    return ( 
        <div className="user-detail-container">
                            <div className="user-details-items">
                                <div>{avatar}</div>
                                <div>
                                    <h4 className="user-details-name">Grace Effiom</h4>
                                    <p><span className="users-id">LSQF587g90</span></p>
                                </div>
                                <span> {hr}</span>
                                <div>
                                    <h4 className="users-tier">User's Tier</h4>
                                    <span>{star}</span>
                                    <span>{star2}</span>    
                                    <span>{star2}</span>
                                </div>
                                <span>{hr}</span>
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
     );
}
 
export default UserDetailsContainer;