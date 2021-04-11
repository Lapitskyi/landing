import React from 'react'
import PropTypes from "prop-types";

import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocalItem/SocialItem';

import './Header.scss';
import ThemeToggle from "../ThemeToggle/ThemeToggle";


let header = {
    menu: [
        {id: 1, name: "Home", link: "/"},
        {id: 2, name: "About", link: "/about"},
        {id: 3, name: "Order", link: "/order"},
        {id: 4, name: "Portfolio", link: "/portfolio"},
        {id: 5, name: "Login", link: "/login"},
        {id: 6, name: "Registration", link: "/registration"}
    ],
    social: [
        {id: 1, link: "mailto:mail@gmail.com", icon: "#email", alt: "email"},
        {id: 2, link: "tel:80000000000", icon: "#phone", alt: "phone"},
        {id: 3, link: "https://git-scm.com", icon: "#git", alt: "github"}
    ]
};


const Header = (props) => {
    let menuArray = header.menu.map((menu) =>
        <MenuItem
            key={menu.id}
            id={menu.id}
            name={menu.name}
            link={menu.link}
        />)

    let socialArray = header.social.map((social) =>
        <SocialItem
            key={social.id}
            id={social.id}
            link={social.link}
            icon={social.icon}
            alt={social.alt}
        />)

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo"/>
                    </div>

                    <ul className="menu__list">
                        {menuArray}
                    </ul>

                    <ThemeToggle/>

                    <ul className="social__list">
                        {socialArray}
                    </ul>

                </div>
            </div>
        </div>
    )
}


MenuItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string
}

SocialItem.propTypes = {
    id: PropTypes.number,
    link: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
}


export default Header;
