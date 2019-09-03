import React from 'react'
import NavItem from './NavItem'
import {routerLinks} from '../../AppRouter'
import { withTranslation } from 'react-i18next';

function Nav({t}) {
    return (
        <ul>
            {routerLinks.map(item => <NavItem key={item} item={item} text={t(item)}/>)}
        </ul>
    )
}

export default withTranslation()(Nav)