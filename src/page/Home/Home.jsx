import React from 'react'

import './scss/Home.scss';


import TableContainer from "./components/Table/TableContainer";





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