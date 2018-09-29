import axios from 'axios';
import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SELL,
    GET_BRANDS,
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP,
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


export const getProductsBySell = () => (dispatch) => {
    axios.get('/api/productsGuitars/guitars_by_sortby?sortBy=sold&order=desc&limit=4')
    .then((res) => {
        console.log(res.data, "this should be the guitars listed by number sold");
        dispatch({
            type:GET_PRODUCTS_BY_SELL,
            payload: res.data
        })
})

    .catch(err => {
        console.log(err, "this is the errors from the guitar search!")
    })
}

export const getBrands = () => (dispatch) => {
    axios.get('/api/productsBrands/brands')
        .then((res) => {
            dispatch({
                type:GET_BRANDS,
                payload:res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}


export const getWoods = () => (dispatch) => {
    axios.get('/api/productsWoods/woods')
    .then((res) => {
        dispatch({
            type:GET_WOODS,
            payload:res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getProductsToShop = (skip, limit, filters = [], previousState = [] ) =>  (dispatch) => {

          const data = {
                     limit,
                     skip,
                     filters
                      }
                      
                      console.log(data, "this is the data")

                 axios.post('/api/productsGuitars/shop', data)
                .then(response => {

                        console.log(response, "this is the responers!!");

                        dispatch({
                        type:GET_PRODUCTS_TO_SHOP,
                        payload:{
                        size:response.data.size,
                        articles:response.data.articles
                    }
                })
            })    
};