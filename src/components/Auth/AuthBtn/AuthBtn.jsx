import React from 'react'


import './AuthBtn.scss'


import sprite from "../../../assets/spriteSvg/sprite.svg";


const AuthBtn = (props) => {
    return (
        <button className="auth__btn btn" type="button">
            <svg className="auth__btn-icon">
                <use href={sprite + "#close"}></use>
            </svg>
        </button>
    )
}


export default AuthBtn;
