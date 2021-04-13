import React from 'react'

import './scss/Home.scss';


import TableContainer from "./components/TableContainer";





const Home = (props) => {
    return (
        <>
            <section>
                <TableContainer storeTable={props.storeTable}/>
            </section>

        </>
    )
}


export default Home;