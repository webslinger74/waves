import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import RegisterLogin from './components/RegisterLogin/RegisterLogin';
import Register from './components/RegisterLogin/Register';
import Login from './components/RegisterLogin/Login';


const Routes = ()=> {
    
        return (
            
            <Layout>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/register_login" exact component={RegisterLogin} />
                <Route path="/"  exact component={Home}/>
            </Switch>
            </Layout>

          )
    }

 
export default Routes;