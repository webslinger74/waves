import React from 'react';
import UserLayout from '../User/UserLayout';
import ManageBrands from './Manage_Brands';
import ManageWoods from './Manage_Woods';


const ManageCategories = () => {
    return ( 
        <UserLayout>
            <ManageBrands />

            <ManageWoods />
            

        </UserLayout>

     );
}
 
export default ManageCategories;