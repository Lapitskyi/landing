import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route} from "react-router-dom";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Order from "../page/Order/Order";
import Portfolio from "../page/Portfolio/Portfolio";
import LoginContainer from "../page/Auth/LoginContainer";
import Registration from "../page/Auth/Registration";
import Reset from "../page/Auth/Reset";

const MainLayout = (props) => {
    return (
        <>
            <Header updateTheme={props.updateTheme} theme={props.theme}/>
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
        </>

    )
}


export default MainLayout;