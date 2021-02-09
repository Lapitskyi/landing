import React from 'react'

import LinksItem from "./LinksItem/LinksItem";

import "./Links.scss"

const Links = (props) =>{

    let LinkArray = props.state.link.map((link) =>
        <LinksItem
            key={link.id}
            id={link.id}
            title={link.title}
            path={link.path}
        />
    )

    return(
        <ul className="auth__link">
            {LinkArray}
        </ul>
    )
}


export default Links;
