import React from 'react';
import Card from '../home/Card';

const CardBlockShop = (props) => {

        const renderCards = (articles) => (
                articles ?
                articles.map((article) => (
                    
                        <div className="card_item_wrapper" key={article._id}>
                            <Card
                            key={article._id}
                            card={article}
                            {...article}
                            grid={props.grid}
                            />
                           </div>             
                  )) : null
        )
    
        console.log(props.list);
    return (
            
        <div className="card_block_shop">
            <div>
                <div>
                
                {props.list ?
                    props.list.length === 0 ?
                    <div className="no_result">
                    Sorry no Results!
                    </div>
                    : null 
                 : null }   
                 
                    { renderCards(props.list)  }
                
                </div> 
                
                
                
            </div>


        </div>
      );
}
 
export default CardBlockShop;