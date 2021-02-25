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
import About from "./components/About/About";

import {Route} from "react-router-dom"

import LoginContainer from "./components/Auth/LoginContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header  />
            <div className="content">
                <div className="container">
                    <Route path='/' exact render={() => <Home />}/>
                    <Route path='/about' render={() => <About />}/>
                    <Route path='/order' render={() => <Order/>}/>
                    <Route path='/portfolio' render={() => <Portfolio />}/>
                    <Route path='/login' render={() => <LoginContainer />}/>
                    <Route path='/registration' render={() => <Registration />}/>
                    <Route path='/reset' render={() => <Reset />}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
