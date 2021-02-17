import React from 'react'

import './Home.scss';
import Reviews from "./Rewievs/Reviews";
import About from "./About/About";
import Biography from "./ Biography/Biography";





const Home = (props) => {

    return (
        <>
            <section>
                <About state={props.state}/>
            </section>
            <section>
                <Biography />
            </section>
            <section>
                <Reviews/>
            </section>

        </>
    )
}


export default Home;