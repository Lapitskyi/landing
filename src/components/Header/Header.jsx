import React from 'react'
import './Header.scss';
import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocalItem/SocialItem';

let menu = [
    {id: '1', name: "Home", link: "/"},
    {id: '2', name: "Order", link: "/order"},
    {id: '3', name: "Portfolio", link: "/portfolio"},
    {id: '4', name: "Login", link: "/login"},
    {id: '5', name: "Registration", link: "/registration"},
];


let social = [
    {id: "1", link: "mailto:mail@gmail.com", icon: "#email", alt: "email"},
    {id: "2", link: "tel:80000000000", icon: "#phone", alt: "phone"},
    {id: "3", link: "https://git-scm.com", icon: "#git", alt: "github"},
]

const Header = (props) => {

    let menuArray = menu.map((menu) =>
        <MenuItem
            id={menu.id}
            name={menu.name}
            link={menu.link}
        />)

    let socialArray = social.map((social) =>
        <SocialItem
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

                    <ul className="social__list">
                        {socialArray}
                    </ul>

                </div>
            </div>
        </div>
    )
}


export default Header;
