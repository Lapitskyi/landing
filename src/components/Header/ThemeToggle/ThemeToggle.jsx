import React, {useState} from "react";
import './scss/ThemeToggle.scss';
import sprite from "../../../assets/spriteSvg/sprite.svg"


const ThemeToggle = (props) => {

    const onThemeToggle = (theme) => {
        props.updateTheme(theme)
    }

    return (
        <div className="theme">
            <input className="theme__input"
                   type="checkbox"
                   id="checkbox"
                   checked={props.theme}
                   onClick={() => onThemeToggle(props.theme)}
            />
            <label className="theme__label" for="checkbox">

                <svg className="theme__icon">
                    <use href={sprite + "#moon"}></use>
                </svg>
                <svg className="theme__icon">
                    <use href={sprite + "#sun"}></use>
                </svg>

                <div className="theme__ball"></div>
            </label>
        </div>
    )
}


export default ThemeToggle;
