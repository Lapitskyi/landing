import React from "react";
import "../scss/Social.scss";
import sprite from "../../../assets/spriteSvg/sprite.svg";



const Social = (props) =>{
    return(
        <ul className="social__list">
            {props.social.map(social=>
                <li className="social__list-item" key={social.id}>
                    <a className="social__list-link" href={social.link}>
                        <svg className="social__list-icon">
                            <use href={sprite + social.icon}></use>
                        </svg>
                    </a>
                </li>

            )}
        </ul>
    )
}

export default Social;