import React from 'react';
import { Link } from 'react-router-dom';
import UserDashboard from './UserDashboard';


const UserLayout = () => {
    return ( 

        <div className="container">
        <div className="user_container">
        <div className="user_left_nav">
        
        <h2>My Account</h2>
        <div className="links">
        <Link to="/user/dashboard">Account</Link>
        <Link to="/user/user_profile">User Information</Link>
        <Link to="user/cart">My Cart</Link>
        </div>
        </div>
        <div className="user_right">
        <UserDashboard />
        
        
        </div>
        
        </div>    
        </div>       
    
     );
}
 
export default UserLayout;