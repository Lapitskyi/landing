import React from 'react'

import sprite from "../../../assets/spriteSvg/sprite.svg";
import './SocialItem.scss';

const SocialItem = (props) => {

    const {link, icon} = props

    return (
        <li className="social__list-item">
            <a className="social__list-link" href={link}>
                <svg className="social__list-icon">
                    <use href={sprite + icon}></use>
                </svg>
            </a>
        </li>
    )
}



export default SocialItem;