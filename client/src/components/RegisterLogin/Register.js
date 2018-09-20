import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registeruser } from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';
import TextFieldGroup from '../Inputs/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
   
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      lastName:this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registeruser(newUser, this.props.history);

}
/*
componentDidMount(){
  if(this.props.auth.isAuthenticated){
    this.props.history.push('/register_login')
  }
}
*/
  componentWillReceiveProps(nextProps) {
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
  }}


 
  render() {

    
    const { errors } = this.state;
  

    return (

        <div className="page_wrapper">
        <div className="container">
            <div className="register_login_container">
                <div className="left">
                    <form onSubmit={this.onSubmit}>
                    <h2>Personal information</h2>
                        <div className="form_block_two">
                            <div className="block">
                            <TextFieldGroup 
                                 type="text"
                                 placeholder="First Name"
                                 name="name"
                                 error={errors.name}
                                 value={this.state.name}
                                 onChange={this.onChange}
                            />
                            </div>
                            <div className="block">
                            <TextFieldGroup 
                                 type="text"
                                 placeholder="Last Name"
                                 name="lastName"
                                 error={errors.lastName}
                                 value={this.state.lastName}
                                 onChange={this.onChange}
                            />
                            </div>
                            <div className="block">
                            <TextFieldGroup 
                                 type="email"
                                 placeholder="Email"
                                 name="email"
                                 error={errors.email}
                                 value={this.state.email}
                                 onChange={this.onChange}
                            />
                            </div>
                        </div>
                        <div>
                        <TextFieldGroup 
                                 type="password"
                                 placeholder="Enter Password"
                                 name="password"
                                 error={errors.password}
                                 value={this.state.password}
                                 onChange={this.onChange}
                            />
                        </div>
                        <h2>Verify password</h2>
                        <div className="form_block_two">
                            <div className="block">
                            <TextFieldGroup 
                                 type="password"
                                 placeholder="Confirm Password"
                                 name="password2"
                                 error={errors.password2}
                                 value={this.state.password2}
                                 onChange={this.onChange}
                            />
                            </div>
                          
                        </div>
                        <div>
                            { this.state.formError ?
                                <div className="error_label">
                                    Please check your data
                                </div>
                            :null}
                            </div>

                            <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>     

       </div>
    );
  }
}

const actions = {
  registeruser
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    errors:state.errors
  }
}



export default connect(mapStateToProps, actions)(withRouter(Register));
