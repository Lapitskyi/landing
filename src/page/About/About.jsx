import React from 'react'


import ReviewsContainer from "./components/Rewievs/ReviewsContainer";
import AboutItemContainer from "./components/About/AboutItemContainer";






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