import React from 'react'

import './Home.scss';


import TableContainer from "./Table/TableContainer";





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