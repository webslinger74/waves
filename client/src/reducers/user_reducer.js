const initialState = {
    isAuthenticated:false,
    user: {}
}



const userReducer = (state=initialState, action)=> {
    switch(action.type){
        default:
            return state;
    }
}


export default userReducer;