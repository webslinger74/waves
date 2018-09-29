import React from 'react';
import CardBlockShop from '../Inputs/CardBlockShop';

const LoadMoreCarts = (props) => {
    return ( 

        <div>
        <div>
                <CardBlockShop
                    grid={props.grid}
                    list={props.products}
                    />
        </div>
        </div>
        
        
           );
}
 
export default LoadMoreCarts;