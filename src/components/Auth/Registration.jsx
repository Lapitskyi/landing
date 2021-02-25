import React from 'react'

import AuthForm from './AuthForm/AuthForm'
import AuthBtn from "./AuthBtn/AuthBtn";
import Links from "./AuthLink/Links";

import './Auth.scss'

const Registration = (props) => {

   const authRegistration= {
        input: [
            {id: "email", label: "Email", placeholder: "email"},
            {id: "password", label: "Password", placeholder: "password"},
            {id: "repassword", label: "Repassword", placeholder: "repassword"}
        ],
            btn: "Sing Up",
            link: [
            {id: 1, title: "Already have login and password? Sign in", path: '/login'}
        ]
    }


    return (
        <div className="registration">
            <div className="auth__inner">

                <AuthBtn/>

                <h2 className="auth__title">Sing Up</h2>

                <AuthForm state={props.state} auth={authRegistration}/>

                <Links state={props.state} auth={authRegistration}/>
            </div>
        </div>
    )
}



export default Registration;