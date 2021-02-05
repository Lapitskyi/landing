import React from 'react'
import './Header.scss';
import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocalItem/SocialItem';



const Header = (props) => {


    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo" />
                    </div>

                    <ul className="menu__list">
                        {/* {menuArray} */}
                        <MenuItem name="Home" link="/home" />
                        <MenuItem name="Order" link="/order" />
                        <MenuItem name="Portfolio" link="/portfolio" />
                        <MenuItem name="Login" link="/login" />
                        <MenuItem name="Registration" link="/registration" />
                    </ul>


                    <ul className="social__list">
                        {/* {socialArray} */}

                        <SocialItem href="mailto:mail@gmail.com" icon="#email" alt="mail" />
                        <SocialItem href="tel:80000000000" icon="#phone" alt="phone" />
                        <SocialItem href="https://git-scm.com/" icon="#git" alt="github" />
                    </ul>

                </div>
            </div>
        </div >
    )
}


export default Header;
