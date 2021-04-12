import React from "react";

import '../scss/PortfolioItem.scss';

const PortfolioItem = (props) => {

    return (
        <li className="porfolio__list-item">
            <img className="portfolio__list-img" src={props.img} alt={props.alt}/>
            <p className="portfolio__list-text">
                {props.text}
            </p>
        </li>

    )
}

export default PortfolioItem;