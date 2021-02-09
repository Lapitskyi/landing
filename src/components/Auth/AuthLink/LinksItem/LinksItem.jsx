import React from 'react'


import {NavLink} from "react-router-dom";

import "./LinksItem.scss"

const LinksItem = (props) => {
    const {path, title } = props;

    return (
        <li className="auth__link-item">
            <NavLink className="auth__link" to={path}>{title}</NavLink>
        </li>
    )
}



export default LinksItem;
