import React from 'react'


import ReviewsContainer from "./components/ReviewsContainer";
import AboutItemContainer from "./components/AboutItemContainer";






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