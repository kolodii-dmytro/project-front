import {LOGIN, OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM} from './actionTypes'

export function closeLoginForm () {
    return({type: CLOSE_LOGIN_FORM})
}
export function login (payload) {
    return({type: LOGIN, payload})
}

