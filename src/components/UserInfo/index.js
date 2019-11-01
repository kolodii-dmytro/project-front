import React from 'react'
//import { withTranslation } from 'react-i18next';
import "./userInfo.scss"
import LoginButton from "./LoginButton"
import LoginForm from "./LoginForm"

import { useSelector } from 'react-redux'

function UserInfo(props){
    const {isLoggedIn, isLoginFormVisible} = useSelector(state=>state.user)
    console.log(isLoggedIn, isLoginFormVisible)
    return (
        <div className="user-info">
           <LoginButton text="login" />
           {isLoginFormVisible ? <LoginForm />: null}
        </div>
    )
}

export default UserInfo