import React from 'react'
import PropTypes from 'prop-types'

import sprite from "../../../assets/spriteSvg/sprite.svg";
import './SocialItem.scss';

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

SocialItem.propTypes = {}

export default SocialItem;