import React from 'react'
import PropTypes from 'prop-types'
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


MenuItem.propTypes = {}

export default MenuItem;