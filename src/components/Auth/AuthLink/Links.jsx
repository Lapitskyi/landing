import React from 'react'
import PropTypes from "prop-types";

import LinksItem from "./LinksItem/LinksItem";

import "./Links.scss"


const Links = (props) => {

    let LinkArray = props.state.link.map((link) =>
        <LinksItem
            key={link.id}
            id={link.id}
            title={link.title}
            path={link.path}
        />
    )

    return (
        <ul className="auth__link">
            {LinkArray}
        </ul>
    )
}

LinksItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    path: PropTypes.string
}

export default Links;
