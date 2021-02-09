import React from 'react'

import AuthForm from './AuthForm/AuthForm'
import AuthBtn from "./AuthBtn/AuthBtn";
import Links from "./AuthLink/Links";

import './Auth.scss'

const Registration = (props) => {


    return (
        <div className="registration">
            <div className="auth__inner">

                <AuthBtn/>

                <h2 className="auth__title">Sing Up</h2>

                <AuthForm state={props.state}/>

                <Links state={props.state}/>
            </div>
        </div>
    )
}



export default Registration;