import React from 'react'
import PropTypes from "prop-types";


import "./Links.scss"
import {NavLink} from "react-router-dom";


const Links = (props) => {
    return (
        <ul className="auth-link__list">
            {
                props.auth.link.map((link) =>
                    <li className="auth-link__list-item" key={link.id}>
                        <NavLink className="auth-link__list-link" to={link.path}>{link.title}</NavLink>
                    </li>
                )}
        </ul>
    )
}

Links.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    path: PropTypes.string
}

export default Links;
