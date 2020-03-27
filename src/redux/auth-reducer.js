import React from 'react'
import { authApi } from '../components/api/api'
const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export default authReducer;

export const getAuthUserData = () => {
    return (dispatch) => {
        authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data; //тут раскладываем ответ от сервера по переменным
                dispatch(setAuthUserData(id, email, login));
            }
        }
        )
    }
}