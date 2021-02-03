import React from 'react'
import AuthForm from './AuthForm/AuthForm'
import { NavLink } from 'react-router-dom';
import './Auth.scss'
import sprite from "../../assets/spriteSvg/sprite.svg";




const Login = (props) => {
    let inputs = [

        { id: "email", label: "Username or email", placeholder: "email" },
        { id: "password", label: "password", placeholder: "password" }
    ]

    return (
        <div className="login">
            <div className="auth__inner">
                <button class="auth__btn btn" type="button" >
                    <svg className="auth__btn-icon">
                        <use href={sprite + "#close"}></use>
                    </svg>
                </button>


                <h2 className="auth__title">Sing in</h2>
                <AuthForm inputs={inputs} />

                <NavLink className="auth__link" to="/reset" >Forgot your password?</NavLink>
                <NavLink className="auth__link" to="/registration" >Don't have an account yet? Register now</NavLink>
            </div>
        </div>
    )
}


export default Login;