import  { combineReducers, createStore } from 'redux';
import countReducer from './src/redux/reducer/countReducer';
import authReducer from './reducers/authReducer';


const allReducer = combineReducers({
    countReducer,
    authReducer
})

export const store = createStore(allReducer)

