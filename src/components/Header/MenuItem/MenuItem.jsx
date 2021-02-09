import React from 'react'

import {NavLink} from 'react-router-dom';

import './MenuItem.scss';



const MenuItem = (props) => {
    const {name, link} = props

    return (
        <li className="menu__list-item">
            <NavLink to={link} className="menu__list-link">
                {name}
            </NavLink>
        </li>
    )
}



export default MenuItem;