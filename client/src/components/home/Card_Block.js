import React from 'react';
import Card from './Card';


const  CardBlock = ({ item , title}) => {

    const renderCards = () => (
        item ? 
        item.map((card,i) => (

                <div className="card_item_wrapper" key={i}>
                    <h1>title of the guitar</h1>

                        <Card card={card} />
                  
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
                         flexWrap:'Wrap'
                       }}>

           
                { renderCards(item)}
            </div>
            </div>
            </div>

      );
}
 
export default  CardBlock;