import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocalItem/SocialItem';

import './Header.scss';

const Header = (props) => {

    let menuArray = props.state.menu.map((menu) =>
        <MenuItem
            key={menu.id}
            id={menu.id}
            name={menu.name}
            link={menu.link}
        />)

    let socialArray = props.state.social.map((social) =>
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

                    <ul className="social__list">
                        {socialArray}
                    </ul>

                </div>
            </div>
        </div>
    )
}


Header.propTypes = {}

export default Header;
