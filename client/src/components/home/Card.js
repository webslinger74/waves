import React, { Component } from 'react';
import noImage from '../../images/image_not_availble.png';


class Card extends Component {
    constructor(props) {
        super(props);
        
    }

    renderCardImage(images){
        console.log(images);
       
        if(images && images.length > 0){
                return image[0].url
        } else {
            return noImage.url;
        }  
    }


    render() {
        const { card  } = this.props;
        console.log(card, "this is card in the card")
        return (
               

            <div className="card_item_wrapper"> 
                <div className="image"
                                style={{
                                    background:`url(${this.renderCardImage(card.images)}) no-repeat`
                                }}>
                
                <div>{card.frets}</div>
                <div>{card.name}</div>
                <div className="price">{card.price}</div>
                        </div>            
                                        
               
            </div>



          );
    }
}
 
export default Card;
