import React from 'react'
import '../Header.scss';



const SocialItem = (props) => {
    return (
        <li className="social__list-item">
            <a className="social__list-link" href={props.href} >
                <img className="social__list-icon" src={props.src} alt={props.alt} />
            </a>
        </li>
    )
}


export default SocialItem;