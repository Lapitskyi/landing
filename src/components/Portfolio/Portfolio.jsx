import React from 'react'
import PropTypes from "prop-types";

import './Portfolio.scss';


const Portfolio = (props) => {
    const state = props.state;

    return (
        <div className="portfolio__inner">

            {state.map((item) => <div key={item.id}>
                    <h2 className="portfolio__title">{item.title}</h2>
                    <ul className="portfolio__list">
                    </ul>

                </div>
            )}

        </div>
    )
}

Portfolio.propTypes = {
    title: PropTypes.string,
}

export default Portfolio;