import {LOGIN, OPEN_LOGIN_FORM,CLOSE_LOGIN_FORM} from '../actionTypes'

const initialState = {
        isLoggedIn:false,
        isLoginFormVisible:false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            const {login, password} = action.payload;
            console.log(login, password)
            return {
                ...state,
                isLoggedIn : true,
                isLoginFormVisible:false,
            } 
        }
        case OPEN_LOGIN_FORM:{
            return {
                ...state,
                isLoginFormVisible: true
            }
        }
        case CLOSE_LOGIN_FORM:{
            return {
                ...state,
                isLoginFormVisible: false
            }
        }
        default:
            return state
    }
}