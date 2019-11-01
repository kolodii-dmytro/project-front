import React, { Component } from 'react';
import Nav from "../Nav"
import LanguageSwitcher from "../LanguageSwitcher"
import UserInfo from "../UserInfo"
import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <header>
                <Nav />
                <div className="right-side">
                <UserInfo />
                <LanguageSwitcher />
                </div>
                
                
            </header>
        )
    }


}