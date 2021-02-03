import React from 'react'
import AuthForm from './AuthForm/AuthForm'
import { NavLink } from 'react-router-dom';
import './Auth.scss';
import sprite from "../../assets/spriteSvg/sprite.svg";



const Reset = (props) => {


    let inputs = [

        { id: "email", label: "email", placeholder: "email" }

    ]


    return (
        <div className="reset">
            <div className="auth__inner">

                <button className="auth__btn btn" type="button">
                    <svg className="auth__btn-icon">
                        <use href={sprite + "#close"}></use>
                    </svg>
                </button>

                <h2 className="auth__title">Reset password</h2>
                <AuthForm inputs={inputs} />

                <NavLink className="auth__link" to="/login" >login</NavLink>

            </div>
        </div>
    )
}


export default Reset;