import React from 'react';
import Card from '../home/Card';

const CardBlockShop = (props) => {

        const renderCards = (articles) => {
            console.log(articles, "these are card articles")
                articles ?
                articles.map((card) => {
                    return (
                    <Card
                        key={card._id}
                        card={card}
                        grid={props.grid}
                    />
                )})
                    : null
                
        }

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
                    { renderCards(props.list) }
                    {console.log(props.list, "this is prop.list")}
                </div> 
                
                
                
            </div>


        </div>
      );
}
 
export default CardBlockShop;