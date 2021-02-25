import React from "react"
import PropTypes from "prop-types";

import "./AboutItem.scss"


let AboutItem = (props) =>{

    return(
        <div className="about">
            <div className="about__inner">
                <h1 className="about__title">{props.about.title}</h1>
                <h2 className="about__suptitle">{props.about.suptitle}</h2>

                <div className="about__text">
                    {props.about.text.map((p) =>
                        <p key={p.id}>
                            {p.text}
                        </p>
                    )}
                </div>

            </div>
        </div>
    )
}

AboutItem.propTypes = {
    id:PropTypes.number,
    title: PropTypes.string,
    suptitle: PropTypes.string,
    text: PropTypes.string
}

export default AboutItem;