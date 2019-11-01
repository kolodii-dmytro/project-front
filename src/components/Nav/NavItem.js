import React from 'react'
import { Link } from "react-router-dom"


export default  function NavItem({item, text}) {

    return (
    <li className="menu-item">
        <Link to={item}>{text}</Link>
    </li>
    )
}
