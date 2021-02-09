import React from 'react'
import PropTypes from 'prop-types'

import AuthForm from './AuthForm/AuthForm'
import Links from "./AuthLink/Links";
import AuthBtn from "./AuthBtn/AuthBtn";

import './Auth.scss'

const Login = (props) => {


    return (
        <div className="login">
            <div className="auth__inner">

                <AuthBtn/>

                <h2 className="auth__title">Sing in</h2>

                <AuthForm state={props.state}/>

                <Links state={props.state}/>

            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login;