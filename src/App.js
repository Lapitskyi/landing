import React, {useState} from 'react'
import './App.scss';

import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"

import Home from "./page/Home/Home";
import Order from "./page/Order/Order"
import Portfolio from "./page/Portfolio/Portfolio"

import Registration from './page/Auth/Registration';
import Reset from './page/Auth/Reset';
import About from "./page/About/About";

import {Route} from "react-router-dom"

import LoginContainer from "./page/Auth/LoginContainer";

const App = (props) => {
    const [theme, setTheme] = useState(false);

    const updateTheme = () => {
        setTheme(!!theme === false);
    }

    return (
        <div className={theme === false
            ? `app-wrapper app-wrapper__white`
            : `app-wrapper app-wrapper__dark`}>
            <Header updateTheme={updateTheme} theme={theme}/>
            <div className="content">
                <div className="container">
                    <Route path='/' exact render={() => <Home storeTable={props.storeTable}/>}/>
                    <Route path='/about' render={() => <About/>}/>
                    <Route path='/order' render={() => <Order/>}/>
                    <Route path='/portfolio' render={() => <Portfolio/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/registration' render={() => <Registration/>}/>
                    <Route path='/reset' render={() => <Reset/>}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
