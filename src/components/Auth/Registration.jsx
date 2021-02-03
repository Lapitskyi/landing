import React from 'react'
import AuthForm from './AuthForm/AuthForm'
import { NavLink } from 'react-router-dom';
import './Auth.scss'
import sprite from "../../assets/spriteSvg/sprite.svg";




const Registration = (props) => {

    let inputs = [

        { id: "email", label: "email", placeholder: "email" },
        { id: "password", label: "password", placeholder: "password" },
        { id: "repassword", label: "repassword", placeholder: "repassword" }
    ]

    return (
        <div className="registration">
            <div className="auth__inner">

                <button className="auth__btn btn" type="button">
                    <svg className="auth__btn-icon">
                        <use href={sprite + "#close"}></use>
                    </svg>
                </button>

                <h2 className="auth__title">Sing Up</h2>
                <AuthForm inputs={inputs} />

                <NavLink className="auth__link" to="/login" >Already have login and password? Sign in</NavLink>

            </div>
        </div>
    )
}


export default Registration;