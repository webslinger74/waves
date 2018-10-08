import React, { Component } from 'react';
import noImage from '../../images/image_not_availble.png';


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
                <div className="image"
                                style={{
                                    background:`url(${this.renderCardImage(card.images)}) no-repeat`
                                }}> </div>

                                <div className="action_container">
                    <div className="tags">
                <div className="brand">{card.brand.name}</div>
                <div className="name">{card.name}</div>
                <div className="price">{card.price}</div>
                        </div>            
                                        
               </div>
            </div>


          );
    }
}
 
export default Card;
