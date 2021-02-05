import React from 'react'
import './SocialItem.scss';
import sprite from "../../../assets/spriteSvg/sprite.svg";


const SocialItem = (props) => {

    return (
        <li className="social__list-item">
            <a className="social__list-link" href={props.link}>
                <svg className="social__list-icon">
                    <use href={sprite + props.icon}></use>
                </svg>
            </a>
        </li>
    )
}


export default SocialItem;