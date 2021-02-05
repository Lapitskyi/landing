import React from 'react'
import {NavLink} from 'react-router-dom';
import './MenuItem.scss';


const MenuItem = (props) => {
    return (
        <li className="menu__list-item">
            <NavLink to={props.link} className="menu__list-link">
                {props.name}
            </NavLink>
        </li>
    )
}


export default MenuItem;