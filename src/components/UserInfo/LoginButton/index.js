import React from 'react'
import './loginButton.scss'
import { useDispatch } from 'react-redux'
import {OPEN_LOGIN_FORM} from '../../../redux/actionTypes'

function LoginButton({text}){
    const dispatch = useDispatch()
    return(
        <div className="login-button"
        onClick={()=>dispatch({type:OPEN_LOGIN_FORM})}>
           {text}
        </div>
    )
}
export default LoginButton
