import React, {useState} from "react";
import './scss/ThemeToggle.scss';
import sprite from "../../assets/spriteSvg/sprite.svg"


const ThemeToggle = () => {

    const [theme, setTheme] = useState(false)

    const onThemeToggle = () => {
        setTheme(!!theme === false)
    }

    return (
        <div className="theme">
            <input className="theme__input"
                   type="checkbox"
                   id="checkbox"
                   checked={theme}
                   onClick={(e) => onThemeToggle(e)}
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
