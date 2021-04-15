import React from 'react'
import PropTypes from "prop-types";


import "../scss/AuthLinks.scss"
import {NavLink} from "react-router-dom";


const AuthLinks = ({auth:{link}}) => {
    return (
        <ul className="auth-link__list">
            {
                link.map((link) =>
                    <li className="auth-link__list-item" key={link.id}>
                        <NavLink className="auth-link__list-link" to={link.path}>{link.title}</NavLink>
                    </li>
                )}
        </ul>
    )
}

AuthLinks.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    path: PropTypes.string
}

export default AuthLinks;
