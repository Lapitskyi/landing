import React from 'react'
import AuthForm from './AuthForm/AuthForm'
import { NavLink } from 'react-router-dom';
import './Auth.scss'




const Registration = (props) => {

    let inputs = [

        { id: "email", label: "email", placeholder: "email" },
        { id: "password", label: "password", placeholder: "password" },
        { id: "repassword", label: "repassword", placeholder: "repassword" }
    ]

    return (
        <div className="registration">
            <div className="auth__inner">

                <button class="auth__btn btn" type="button" >
                    <img src="" alt="icon" />
                </button>

                <h2 className="auth__title">Sing Up</h2>
                <AuthForm inputs={inputs} />

                <NavLink className="auth__link" to="/login" >login</NavLink>

            </div>
        </div>
    )
}


export default Registration;