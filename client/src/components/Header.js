import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user_actions';


class Header extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            page: [
                {
                    name:'Home',
                    linkTo:'/',
                    public: true
                },
                {
                    name:'Guitars',
                    linkTo:'/shop',
                    public: true
                }
            ],
            user:[
                {
                    name: 'My Cart',
                    linkTo:'/user/cart',
                    public:false
                },
                {
                    name:'My Account',
                    linkTo:'/user/dashboard',
                    public:false
                },
                {
                    name:'Login',
                    linkTo:'/register_login',
                    public:true
                },
                {
                    name:'Log Out',
                    linkTo:'/user/logout',
                    public:false
                }

            ]
        }

    }

    showLinks = (type) => {
        let list = [];
        if(!this.props.auth){
            console.log("not logged in")
            if(type === this.state.user){
                type.filter(link => {
               if(link.public === true){
                   list.push(link)
               }    
                })
                console.log(list, "this is the list of links after filter")
               const newlist =  list.map((item, i) =>  {
                  return this.defaultLinks(item, i)
              })
              console.log(newlist, "this is the post list")
              return newlist;



                 } else {
                    if(type === this.state.page){
                        const pagelist = type.map((item,i) => {
                            return this.defaultLinks(item,i)
                        })
                        console.log(pagelist, "this is the post list of public links")
                        return pagelist
                    }                 
                }           
        } else {



            if(type === this.state.user){
                type.filter(link => {
                    if(link.public === false){
                        list.push(link)
                    }
                })
                const newlist = list.map((item, i) => {
                    if(item.name !== "My Cart"){
                    return this.defaultLinks(item,i);
                    } else {
                        return this.cartLink(item,i);
                    }
                });
                console.log(newlist, "this is the post list")
                return newlist;
            }
            else {
                if(type === this.state.page){
                    const pagelist = type.map((item,i) => {
                        return this.defaultLinks(item,i)
                    })
                    console.log(pagelist, "this is the post list of public links")
                    return pagelist
                }  
            }   
        }
    }

    cartLink = (item,i) => {
        if(this.props.currentUser){
        const  currentUser  = this.props.currentUser;
        console.log(currentUser, "this is the user from in the component");
        
        return (
            <div className="cart_link" key={i}>
                <span>{currentUser.cart ? currentUser.cart.length : 0}</span>
                <Link to={item.linkTo}>
                    {item.name}
                </Link>
            </div>
        )
    }
}

    defaultLinks = (item, i) => (
        item.name === 'Log Out' ?
            <div className="log_out_link"
                key={i}
                onClick={() => this.props.logoutUser(this.props.history)}
                >

                 {item.name}

            </div>:
                 <Link key={i} to={item.linkTo}>{item.name}</Link>
        
                 )
    
    



    render() { 

           



        return (
            <header className="bck_b_light">
            <div className="container">
            <div className="left">
            <div className="logo">
            WAVES
            </div>
            </div>
            <div className="right">
            <div className="top">

            {this.showLinks(this.state.user)}
           { console.log(this.state.user, 'the state user')}
            </div>
            <div className="bottom">
            
            {this.showLinks(this.state.page)}



            </div>
            </div>
            </div>
            
            </header>
          );
    }
}
 

const mapStateToProps = (state) => ({
    auth: state.auth.isAuthenticated,
    currentUser: state.auth.FullUserRecord
})

const actions = {
    logoutUser
}

export default connect(mapStateToProps, actions)(withRouter(Header));




