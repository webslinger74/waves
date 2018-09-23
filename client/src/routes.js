import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';
import RegisterLogin from './components/RegisterLogin/RegisterLogin';
import Register from './components/RegisterLogin/Register';
import Login from './components/RegisterLogin/Login';
import UserLayout from './components/User/UserLayout';
import PrivateRoute from './utils/PrivateRoute';
import Shop from './components/shop/Shop';

const Routes = ()=> {
    
        return (
            
            <Layout>
            <Switch>

                
                <PrivateRoute path="/user/dashboard" exact component={UserLayout} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/register_login" exact component={RegisterLogin} />
                <Route path="/shop"  exact component={Shop}/>
                <Route path="/"  exact component={Home}/>
            </Switch>
            </Layout>

          )
    }

 
export default Routes;