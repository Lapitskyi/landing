import React from "react"
import PropTypes from "prop-types";

import "./AboutItem.scss"


let AboutItem = (props) =>{

    const {title, suptitle, text} = props.state;

    let textArray = text.map((p) =>
        <p key={p.id}>
            {p.text}
        </p>
    )

    return(
        <div className="about">
            <div className="about__inner">
                <h1 className="about__title">{title}</h1>
                <h2 className="about__suptitle">{suptitle}</h2>

                <div className="about__text">
                    {textArray}
                </div>

            </div>
        </div>
    )
}

AboutItem.propTypes = {
    title: PropTypes.string,
    suptitle: PropTypes.string,
    text: PropTypes.string
}

export default AboutItem;