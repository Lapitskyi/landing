import React from "react"

import "../scss/Reviews.scss"
import PropTypes from "prop-types";


let ReviewsList = (props) => {

    return (
        <ul className="reviews__list ">
            {
                props.reviews.map((item) =>
                    <li className="reviews__list-item" key={item.id}>
                        <img className="reviews__list-img" src={item.img} alt="icon user"/>
                        <p className="reviews__list-text">{item.text}</p>
                    </li>
                )
            }
        </ul>
    )
}

ReviewsList.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    text: PropTypes.string
}


export default ReviewsList;