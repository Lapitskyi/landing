import React from 'react'
import './Header.scss';
import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocalItem/SocialItem';
import { Route } from "react-router-dom"

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo" />
                    </div>

                    <ul className="menu__list">
                        <MenuItem name="Home" link="/" />
                        <MenuItem name="Link1" link="/link1" />
                        <MenuItem name="Link2" link="/link2" />
                        <MenuItem name="Login" link="/login" />
                        <MenuItem name="Registration" link="/registration" />
                    </ul>


                    <ul className="social__list">
                        <SocialItem href="mailto:mail@gmail.com" src="" alt="mail" />
                        <SocialItem href="tel:80000000000" src="" alt="phone" />
                        <SocialItem href="https://git-scm.com/" src="" alt="github" />
                    </ul>

                </div>
            </div>
        </div >
    )
}


export default Header;
