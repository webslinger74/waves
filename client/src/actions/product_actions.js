import axios from 'axios';
import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SELL,
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from './types';

export const getProductsByArrival = () => (dispatch) => {
    axios.get('/api/productsGuitars/guitars_by_sortby?sortBy=createdAt&order=desc&limit=4')
        .then((res) => {
            console.log(res.data, "this should be the guitars");
            dispatch({
                type:GET_PRODUCTS_BY_ARRIVAL,
                payload: res.data
            })
    })

        .catch(err => {
            console.log(err, "this is the errors from the guitar search!")
        })
    }  

/*
export const getProductsBySell = () => (dispatch) => {

}

*/