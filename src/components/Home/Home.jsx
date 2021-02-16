import React from 'react'

import './Home.scss';
import Reviews from "./Rewievs/Reviews";
import About from "./About/About";
import Biography from "./ Biography/Biography";


let biographyArray = [
    {id: 1, year: 2018, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"},
    {id: 2, year: 2019, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit"},
    {id: 3, year: 2020, text: "Lorem ipsum, dolor sit amet"},
    {id: 4, year: 2021, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"},
];



const Home = (props) => {

    return (
        <>
            <section>
                <About state={props.state}/>
            </section>
            <section>
                <Biography biographyArr={biographyArray}/>
            </section>
            <section>
                <Reviews/>
            </section>

        </>
    )
}


export default Home;