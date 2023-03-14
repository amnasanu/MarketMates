import {   USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS ,
    USER_REGISTER_FAIL ,} from '../Constants/UserConstants'

import axios from 'axios'

export const register=(username, email, password , re_password) => async (dispatch)=>{

    try{
        dispatch({
            type :USER_REGISTER_REQUEST
        
        })
        console.log(username, email,password, re_password)


        const {data} = await axios.post(
            'http://127.0.0.1:8000/auth/users/',
            {'username':username,'email':email , 'password':password, 're_password':re_password})
        
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload :data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))


    }catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload :error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}