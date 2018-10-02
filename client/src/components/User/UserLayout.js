import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import { connect } from 'react-redux';
import admin from './admin';

class UserLayout extends Component {
     constructor(props){
         super(props)
     }

    genLinks = () => (
        <div>
         <h2>Admin</h2>
           {admin.map((item,index) => {
             return (
                <div className="links" key={index} > 
                <Link  to={item.linkTo}>{item.name}</Link> 
             </div>
             ) 
            })}
            </div>
    )


    render() { 
            const { auth, isAdd } = this.props;

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
            {console.log(isAdd, "recs")}
            {isAdd && isAdd.isAdmin ? 
            this.genLinks()
        : null}


            </div>
            <div className="user_right">
            <UserDashboard auth={auth} />
            
            
            </div>
            
            </div>    
            </div>       
          );
    }
}
const actions = {

}
const mapStateToProps = (state) => ({
    isAdd: state.auth.FullUserRecord,
    auth: state.auth
   
})
 
export default connect(mapStateToProps, actions)(UserLayout);
 