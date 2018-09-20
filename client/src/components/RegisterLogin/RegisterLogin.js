import React from 'react';
import MyButton from '../Inputs/Button';



const RegisterLogin = () => {
    return ( 
        <div className="page_wrapper">
             <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                            <p>this is a lovely day to make a website</p>
                            <MyButton
                                type='default'
                                title='Create an Account'
                                linkTo='/register'
                                addStyles={{
                                    margin:'10px 0 0 0'
                                }}
                            />
                    </div>
                    <div className="right">
                                <h1>Registered Customers</h1>
                                <p>If hou have an account please login</p>
                             <MyButton
                                type='default'
                                title='Login'
                                linkTo='/login'
                                addStyles={{
                                    margin:'10px 0 0 0'
                                }}
                            />
                    </div>
                </div>
             </div>
        </div>
     );
}
 
export default RegisterLogin;