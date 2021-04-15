import React from 'react'
import PropTypes from "prop-types";
import '../scss/Header.scss';
import ThemeToggle from "./ThemeToggle";

import Menu from "./Menu";
import Social from "./Social";
import LangText from "./LangText";

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

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo"/>
                    </div>

                    <Menu menu={header.menu}/>

                    <ThemeToggle updateTheme={props.updateTheme}
                                 theme={props.theme}/>

                    <LangText/>

                    <Social social={header.social}/>

                </div>
            </div>
        </div>
    )
}


export default Header;
