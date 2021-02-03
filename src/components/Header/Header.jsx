import React from 'react'
import './Header.scss';
import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocalItem/SocialItem';



const Header = (props) => {

    // let menu = [
    //     { id: '1', name: "Home", link: "/" },
    //     { id: '2', name: "Order", link: "/order" },
    //     { id: '3', name: "Portfolio", link: "/portfolio" },
    //     { id: '4', name: "Login", link: "/login" },
    //     { id: '5', name: "Registration", link: "/registration" },
    // ];

    // let social = [
    //     { id: "1", link: "mailto:mail@gmail.com", icon: "", alt: "email" },
    //     { id: "2", link: "tel:80000000000", icon: "", alt: "phone" },
    //     { id: "3", link: "https://git-scm.com", icon: "", alt: "github" },
    // ]

    // let socialArray = social.map((social) =>
    // let menuArray = menu.map((menu) =>
    //     <MenuItem
    //         id={props.id}
    //         name={props.name}
    //         path={props.path}
    //     />)


    // <SocialItem
    //     id={props.id}
    //     link={props.link}
    //     icon={props.icon}
    //     alt={props.alt}
    // />)


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
