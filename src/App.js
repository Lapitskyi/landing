import React from 'react'
import './App.scss';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Order from "./components/Order/Order"
import Portfolio from "./components/Portfolio/Portfolio"
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Reset from './components/Auth/Reset';

import {Route} from "react-router-dom"
import Home from "./components/Home/Home";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/order' render={() => <Order/>}/>
                    <Route path='/portfolio' render={() => <Portfolio/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/registration' render={() => <Registration/>}/>
                    <Route path='/reset' render={() => <Reset/>}/>

                </div>

            </div>
            <Footer/>
        </div>
    )

}

export default App;
