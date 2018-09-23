import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SELL
 } from '../actions/types';


 const initialState = {};

 const productReducer = (state=initialState, action) => {
     switch(action.type){
            case GET_PRODUCTS_BY_ARRIVAL:
                return {
                    ...state,
                    arrival : action.payload
                };
            default:
                return state;
     }
 }

export default productReducer;