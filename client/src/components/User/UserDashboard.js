import React, { Component } from 'react';
import UserLayout from './UserLayout';
import MyButton from '../Inputs/Button';



const UserDashboard = ({auth}) => {
    return (
        <div>
    
        <div className="user_nfo_panel">
          <h1>USER INFORMATION</h1>  
          <div>
        <span>{auth.user.name}</span>
        <span>{auth.user.lastname}</span>
        <span>{auth.user.email}</span>
        </div>
        <MyButton 
            type="default"
            title="Edit account info"
            linkTo="/user/user_profile"
         />
        </div>

        <div className="user_nfo_panel">
        <h1>History purchases</h1>
        <div className="user_product_block_wrapper">

                history
        </div>
        </div>
        
</div>

        
      )
}
 
export default UserDashboard;