import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import { connect } from 'react-redux';


class UserLayout extends Component {
     constructor(props){
         super(props)
     }
    render() { 
            const { auth } = this.props;

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
    auth: state.auth
})
 
export default connect(mapStateToProps, actions)(UserLayout);
 