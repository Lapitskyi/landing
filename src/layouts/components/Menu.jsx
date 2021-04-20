import React from 'react';
import '../scss/Menu.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ menu }) => (
  <ul className="menu__list">
    {menu.map((item) => (
      <li className="menu__list-item" key={item.id}>
        <NavLink to={item.link} className="menu__list-link">
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

Menu.defaultProps = {
  menu: []
};
Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object)
};

export default Menu;
