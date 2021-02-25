import React from 'react'


import ReviewsContainer from "./Rewievs/ReviewsContainer";
import AboutItemContainer from "./About/AboutItemContainer";






const About = (props) => {

    return (
        <>
            <section>
                <AboutItemContainer />
            </section>

            <section>
                <ReviewsContainer/>
            </section>

        </>
    )
}


export default About;