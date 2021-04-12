import React from "react";
import "../scss/Menu.scss"
import {NavLink} from "react-router-dom";


const Menu = (props) =>{
    return(
        <ul className="menu__list">
            {props.menu.map(menu=>
                <li className="menu__list-item" key={menu.id}>
                    <NavLink to={menu.link} className="menu__list-link">
                        {menu.name}
                    </NavLink>
                </li>
            )}
        </ul>
    )
}

export default Menu;