import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {userRegisterReducer} from './Reducers/UserReducer'

const reducer = combineReducers({
  userRegisterReducer: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

    const middleware = [thunk];
 
    const store = configureStore({
        reducer: reducer,
        middleware: middleware,
    });

export default store;
