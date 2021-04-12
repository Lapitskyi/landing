import React from 'react'

import AuthForm from './components/AuthForm/AuthForm'
import ButtonClose from "../../components/ButtonClose/ButtonClose";
import AuthLinks from "./components/AuthLinks";

import './scss/Auth.scss'

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

                <ButtonClose/>

                <h2 className="auth__title">Sing Up</h2>

                <AuthForm state={props.state} auth={authRegistration}/>

                <AuthLinks state={props.state} auth={authRegistration}/>
            </div>
        </div>
    )
}



export default Registration;