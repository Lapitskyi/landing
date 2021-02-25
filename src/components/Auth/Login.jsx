import React from 'react'


import Links from "./AuthLink/Links";
import AuthBtn from "./AuthBtn/AuthBtn";

import './Auth.scss'
import AuthForm from "./AuthForm/AuthForm";




const Login = (props) => {

   const authLogin = {
        input: [
            {id: "email", label: "Username or email", type:'text', placeholder: "email"},
            {id: "password", label: "Password",type:'text', placeholder: "password"}
        ],
            btn: "Sing in",
            link: [
            {id: 1, title: "Forgot your password?", path: '/reset'},
            {id: 2, title: "Don't have an account yet? Register now", path: '/registration'}
        ]
    }

    return (
        <div className="login">
            <div className="auth__inner">

                <AuthBtn/>

                <h2 className="auth__title">Sing in</h2>

                <AuthForm state={props.login} auth={authLogin} />

                <Links state={props.login} auth={authLogin}/>

            </div>
        </div>
    )
}


export default Login;