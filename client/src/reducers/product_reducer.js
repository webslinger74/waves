import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SELL,
    GET_BRANDS,
    GET_WOODS
 } from '../actions/types';


 const initialState = {};

 const productReducer = (state=initialState, action) => {
     switch(action.type){
            case GET_PRODUCTS_BY_ARRIVAL:
                return {
                    ...state,
                    arrival: action.payload
                }
                case GET_PRODUCTS_BY_SELL:
                return {
                    ...state,
                    sold:action.payload
                } 
                case GET_BRANDS:
                return {
                    ...state,
                    brands:action.payload
                } 
                case GET_WOODS:
                return {
                    ...state,
                    woods:action.payload
                }         
            default:
                return state;
     }
 }

export default productReducer;