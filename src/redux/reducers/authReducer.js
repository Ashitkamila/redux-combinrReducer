const initialState= {
    isLogin:false
}
const autrhReducer = (state=initialState, action) =>{
    switch (action.type){
        case 'LOGIN':
            return{
                isLogin: action.payload
            }
            default:return state
    }
}
export default autrhReducer