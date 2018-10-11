import axios from 'axios';
import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SELL,
    GET_BRANDS,
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    GET_ERRORS,
    REMOVE_PRODUCT,
    ADD_BRAND,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL,
    CLEAR_ERROR,
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from './types';


export const getIndProd = (id) => (dispatch) => {
        axios.get(`/api/productsGuitars/guitars_byId?id=${id}&type=single`)
        .then((response) => {
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: response.data[0]
            })
        })
        .catch(err => {
            console.log(err)
        })
}

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
//here
export const addBrand = (brandName, currentBrands) => (dispatch) => {
        console.log(brandName,"this is the brand prior to axios request")
             axios.post('/api/productsBrands/brands', brandName)
        .then(response => {
                //this should get response with success:true, and the brand if posttive
                console.log(response.data.brand, "is this the brand back!!");
                console.log(response.data.success, "is this true");
            let brands = [
                ...currentBrands,
                response.data.brand
            ]
            console.log(brands, "this should be updated array of brands after response from axios")
            dispatch({
                type:ADD_BRAND,
                payload:brands
            })
            dispatch({
                type:GET_ERRORS,
                payload: {}
            })
          })
          .catch((err) => {
              dispatch({
                  type:GET_ERRORS,
                  payload:err.response.data
              })
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

                 axios.post('/api/productsGuitars/shop', data)
                .then(response => {
                        dispatch({
                        type:GET_PRODUCTS_TO_SHOP,
                        payload:{
                        size:response.data.size,
                        articles:response.data.articles
                    }
                })
            })    
};

export const addProduct = (brands) => (dispatch) => {
     axios.post('/api/productsGuitars/guitars', brands)
        .then(response => {
      dispatch({
          type:ADD_PRODUCT,
          payload: response.data.brand
      }) 
      dispatch({
          type:GET_ERRORS,
          payload: {}
      })
    })
    .catch((err) => {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
})
}


export const clearErrors = () => (dispatch) => {
    dispatch({
        type:GET_ERRORS,
        payload:{}
    })
}

export const removeProduct = () => (dispatch) => {
    dispatch({
        type:REMOVE_PRODUCT,
        payload: {}
    })
}




export const clearProductDetail = () => (dispatch) => {
        dispatch({
            type:CLEAR_PRODUCT_DETAIL,
            payload:{}
        })
}


///////////////////////////////////just for testing purposes with Jest

export const brandy = () => ({
    type:BRANDY_TEST,
    payload:{}
})

const BRANDY_TEST = "brandyYeah";



export const brandy2 = (id) => {
    return new Promise((resolve, reject) => {
            if(id === 1){
                resolve({sucess:true});
            } else {
                reject("error");
            }
    })
}



////////////////////////////////////////////////////////////////