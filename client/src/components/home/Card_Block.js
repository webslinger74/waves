import React from 'react';

const  CardBlock = ({ products }) => {

    const renderCards = () => (
        products ? 
        products.map((card,i) => (

                <div className="card_item_wrapper" key={i}>
                    <h1>title of the guitar</h1>
                    <div className="brand">{card.brand.name}</div>
                    <div className="name" >{card.name}</div>
                   <div className="price">{card.price}</div>
                </div>
            )) : null
    )
  /*  {
        props.title ?
        <div className="title">
        {props.title}
        </div>
        : null
    }
<div style={{
    display:'flex',
    flexWrap:'Wrap'
}}>
*/
    return (

            <div className="card_block">
            <div className="container">
    
           
                { renderCards(products)}
            </div>
            </div>
            

      );
}
 
export default  CardBlock;