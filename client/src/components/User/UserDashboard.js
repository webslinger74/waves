import React from 'react';
import UserLayout from './UserLayout';
import MyButton from '../Inputs/Button';



const UserDashboard = () => {
    return (
        <div>
    
        <div className="user_nfo_panel">
          <h1>USER INFORMATION</h1>  
          <div>
        <span>name</span>
        <span>lastname</span>
        <span>email</span>
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