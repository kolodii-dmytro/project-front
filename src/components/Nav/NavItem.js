import React from 'react'
import { Link } from "react-router-dom"

export default  function NavItem({item, text}) {
    return (
    <li>
        <Link to={item}>{text}</Link>
    </li>
    )
}
