import React, { Component } from 'react';
import Nav from "../Nav"
import LanguageSwitcher from "../LanguageSwitcher"

export default class Header extends Component {
    render() {
        return (
            <header>
                <Nav />
                <LanguageSwitcher />
            </header>
        )
    }


}