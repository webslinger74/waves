import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SELL,
    GET_BRANDS,
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_BRAND
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
                case GET_PRODUCTS_TO_SHOP:
                return {
                    ...state,
                    articleSize:action.payload.size,
                    articles: action.payload.articles
                }
                case GET_BRANDS:
                return {
                    ...state,
                    brands:action.payload
                } 
                case ADD_BRAND:
                return {
                    ...state,
                    brands:action.payload
                }
                case GET_WOODS:
                return {
                    ...state,
                    woods:action.payload
                } 
                case ADD_PRODUCT:
                return {
                    ...state,
                    addProduct:action.payload
                } 
                case REMOVE_PRODUCT:
                return {
                    ...state,
                    addProduct:action.payload
                }       
            default:
                return state;
     }
 }

export default productReducer;