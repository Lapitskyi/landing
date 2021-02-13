import React from "react"
import PropTypes from "prop-types";

import "../../Reviews.scss"

let ReviewsItem = (props) =>{
    return(
        <li className="reviews__list-item" >
            <img className="reviews__list-img" src={props.img} alt="icon user"/>
            <p className="reviews__list-text">{props.text}</p>
        </li>
    )
}

ReviewsItem.propTypes = {
    img:PropTypes.string,
    text:PropTypes.string
}

export default ReviewsItem;