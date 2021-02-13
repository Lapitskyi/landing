import React from 'react'


import './Home.scss';
import Reviews from "./Rewievs/Reviews";
import About from "./About/About";


const Home = (props) => {

    return (
        <>
            <section>
             <About state={props.state}/>
            </section>

            <section>
                <Reviews/>
            </section>

        </>
    )
}



export default Home;