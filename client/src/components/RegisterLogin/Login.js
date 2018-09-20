import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginuser } from '../../actions/user_actions';
import TextFieldGroup from '../Inputs/TextFieldGroup';

class Login extends Component {
constructor(){
    super();
    this.state = {
        email:"",
        password:"",
        errors: {}
    };
}

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if(nextProps.errors){
      this.setState({
        ...this.state,
        errors:nextProps.errors
      })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const UserData = {
      email: this.state.email,
      password: this.state.password
    };
  
  this.props.loginuser(UserData);
   
  }

    render() { 
        const {errors} = this.state;

        return (
          
                  
                  <div className="signin_wrapper">

                <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    error={errors.email}
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                     <TextFieldGroup 
                    type="password"
                    placeholder="Password"
                    name="password"
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                  />             

                    { this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
                  
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
            </div>

          )
    }
}

const actions = {
  loginuser
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth,
      errors:state.errors
}}


 
export default connect(mapStateToProps,actions)(Login);