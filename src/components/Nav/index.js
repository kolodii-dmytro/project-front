import React from 'react'
import NavItem from './NavItem'
import {routerLinks} from '../../AppRouter'
import { withTranslation } from 'react-i18next';
import './nav.scss'

function Nav({t}) {
    return (
        <ul className="menu-items-holder">
            {routerLinks.map(item => <NavItem key={item} item={item} text={t(item)}/>)}
        </ul>
    )
}

export default withTranslation()(Nav)