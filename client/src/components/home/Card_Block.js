import React from 'react';
import Card from './Card';


const  CardBlock = ({ item , title}) => {

    const renderCards = () => (
        item ? 
        item.map((card,i) => (

                <div className="card_item_wrapper" key={i}>

                        <Card card={card} key={card._id} />
                  
                </div>
            )) : null
    )
 
    return (

            <div className="card_block">
            <div className="container">
                {
                   title ?
                 <div className="title">
                      {title}
                 </div>
                        : null
                        }
                         <div style={{
                        display:'flex',
                         flex:'wrap'
                       }}>

           
                { renderCards(item)}
            </div>
            </div>
            </div>

      );
}
 
export default  CardBlock;