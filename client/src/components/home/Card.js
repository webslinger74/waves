import React, { Component } from 'react';
import noImage from '../../images/image_not_availble.png';
import { Link } from 'react-router-dom';
import MyButton from '../Inputs/Button';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_actions';

class Card extends Component {
    constructor(props) {
        super(props);
        
    }

    renderCardImage(images){
        console.log(images, "this is the images");
       
        if(images && images.length > 0){
                return images[0].url
        } else {
            return noImage;
        }  
    }


    render() {
        const { card  } = this.props;
        console.log(card, "this is card in the card")
        return (
               

            <div> 
                <Link to={`/product_detail/${card._id}`}>
                <div className="image"
                                
                                style={{
                                    background:`url(${this.renderCardImage(card.images)}) no-repeat`
                                }}
                                > </div></Link>

                                <div className="action_container">
                    <div className="tags">
                <div className="brand">{card.brand.name}</div>
                <div className="name">{card.name}</div>
                <div className="price">{card.price}</div>
                <div className="cart"> <MyButton 
                    type="add_to_cart_link"
                    runAction={() => {
                        this.props.user.FullUserRecord && this.props.user.FullUserRecord.isAuth ?
                        this.props.addToCart(card._id)
                        : console.log("login please")
                    }}
                    /></div>
                        </div>            
                                        
               </div>
            </div>


          );
    }
}

const actions = {
    addToCart
}

const mapStateToProps = (state) => ({
    user:state.auth
})
 
export default connect(mapStateToProps, actions)(Card);
