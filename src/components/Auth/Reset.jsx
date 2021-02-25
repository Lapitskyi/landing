import React from 'react'

import AuthForm from './AuthForm/AuthForm'
import AuthBtn from "./AuthBtn/AuthBtn";
import Links from "./AuthLink/Links";

import './Auth.scss';

const Reset = (props) => {
    const authReset= {
        input: [
            {id: "email", label: "Email", placeholder: "email", btn: "Reset password"},
        ],
            btn: "Reset password",
            link: [
            {id: 1, title: "Already have login and password? Sign in", path: '/login'}
        ]
    }
    return (
        <div className="reset">
            <div className="auth__inner">

                <AuthBtn/>

                <h2 className="auth__title">Reset password</h2>

                <AuthForm state={props.state} auth={authReset}/>

                <Links state={props.state} auth={authReset}/>
            </div>
        </div>
    )
}


export default Reset;