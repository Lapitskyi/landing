import React from 'react'
import PropTypes from "prop-types";

import './Home.scss';
import Reviews from "./Rewievs/Reviews";


const Home = (props) => {

    const {title, suptitle, text} = props.state;

    let textArray = text.map((p) =>
        <p key={p.id}>
            {p.text}
        </p>
    )

    return (
        <>
            <div className="home__inner">
                <h1 className="home__title">{title}</h1>
                <h2 className="home__suptitle">{suptitle}</h2>

                <div className="home__text">
                    {textArray}
                </div>

            </div>
            <Reviews/>
        </>

    )
}

Home.propTypes = {
    title: PropTypes.string,
    suptitle: PropTypes.string,
    text: PropTypes.string
}

export default Home;