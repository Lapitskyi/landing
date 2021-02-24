import React from 'react'

import './About.scss';
import Reviews from "./Rewievs/Reviews";
import AboutItem from "./About/AboutItem";






const About = (props) => {

    return (
        <>
            <section>
                <AboutItem state={props.state}/>
            </section>

            <section>
                <Reviews/>
            </section>

        </>
    )
}


export default About;