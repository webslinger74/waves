// Register User
import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER , USER_DETAILS, CLEAR_USER_DETAILS} from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registeruser = (userData, history) => (dispatch) => {           
          console.log(userData, "this is in the action")
    axios
      .post('/api/users/register', userData)
      .then(res => { 
        console.log(res.data)
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
     //  history.push('/register_login')
    })
        .catch((err) => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        
})
};

export const loginuser = (userData) => (dispatch) => {
        axios
        .post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            //put token in axios request headers
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(userDetails());
            //set current user
            dispatch(setCurrentUser(decoded));
           
            dispatch({
                type:GET_ERRORS,
                payload: {}
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        });

}

//set loggin user

export const setCurrentUser = (decoded) => {
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
};


export const clearUserDetails = () => {
    return {
        type:CLEAR_USER_DETAILS,
        payload:{}
    }
}

export const userDetails = () =>  (dispatch) => {
        axios.get('/api/users/current')
        .then(res => {
            console.log(res, "this is the full details");
            dispatch({
                type:USER_DETAILS,
                payload:res.data
            })
        }) 
        .catch(err => {
            console.log(err);
        })
};

export const logoutUser = (history) => (dispatch) => {
    
        localStorage.removeItem('jwtToken');
        setAuthToken(false);
         dispatch(setCurrentUser({}));
          dispatch(clearUserDetails());
        history.push('/');


}

