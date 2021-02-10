import React from 'react'

import './AuthBtn.scss'
import sprite from "../../../assets/spriteSvg/sprite.svg";


const AuthBtn = (props) => {

    let CloseAuth = (e) => {
        console.log('click')
    }

    return (
        <button className="auth__btn btn" type="button" onClick={CloseAuth}>
            <svg className="auth__btn-icon">
                <use href={sprite + "#close"}></use>
            </svg>
        </button>
    )
}


export default AuthBtn;
