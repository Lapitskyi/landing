import React from 'react'
import PropTypes from 'prop-types'

import AuthForm from './AuthForm/AuthForm'
import AuthBtn from "./AuthBtn/AuthBtn";
import Links from "./AuthLink/Links";

import './Auth.scss';

const Reset = (props) => {

    return (
        <div className="reset">
            <div className="auth__inner">

                <AuthBtn/>

                <h2 className="auth__title">Reset password</h2>

                <AuthForm state={props.state}/>

                <Links state={props.state}/>
            </div>
        </div>
    )
}

Reset.propTypes = {}

export default Reset;