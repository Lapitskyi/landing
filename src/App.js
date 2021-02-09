import React from 'react'
import './App.scss';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Home from "./components/Home/Home";
import Order from "./components/Order/Order"
import Portfolio from "./components/Portfolio/Portfolio"
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Reset from './components/Auth/Reset';

import {Route} from "react-router-dom"

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header state={props.state.header}/>
            <div className="content">
                <div className="container">
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/order' render={() => <Order/>}/>
                    <Route path='/portfolio' render={() => <Portfolio/>}/>
                    <Route path='/login' render={() => <Login state={props.state.formAuth.login}/>}/>
                    <Route path='/registration' render={() => <Registration state={props.state.formAuth.registration}/>}/>
                    <Route path='/reset' render={() => <Reset state={props.state.formAuth.reset}/>}/>

                </div>

            </div>
            <Footer/>
        </div>
    )

}

export default App;
