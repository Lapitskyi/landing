import React from 'react'
import './SocialItem.scss';



const SocialItem = (props) => {


    return (
        <li className="social__list-item">
            <a className="social__list-link" href={props.link} >
                <img className="social__list-icon" src={props.icon} alt={props.alt} />
            </a>
        </li>
    )
}


export default SocialItem;