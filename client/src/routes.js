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
import AddProduct from './components/admin/Add_product';
import UserDashboard from './components/User/UserDashboard';
import ManageCategories from './components/admin/Manage_Categories';
import ProductDetail from './components/Product/Product_Detail';

const Routes = () => {
    
        return (
            
            <Layout>
            <Switch>
                <PrivateRoute path="/user/dashboards" exact component={UserLayout} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <PrivateRoute path="/admin/add_product" exact component={AddProduct} />
                <PrivateRoute path="/admin/manage_categories" exact component={ManageCategories} />

                <Route path="/product_detail/:id" exact component={ProductDetail} />
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