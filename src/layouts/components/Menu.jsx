import React from 'react';
import '../scss/Menu.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ nav }) => {
  const { t } = useTranslation();

  return (
    <ul className="menu__list">
      {nav.map((item) => (
        <li className="menu__list-item" key={item.id}>
          <NavLink to={item.link} className="menu__list-link">
            {t(`${item.name}`)}
          </NavLink>
        </li>
      ))}
    </ul>

  );
};

Menu.defaultProps = {
  nav: []
};
Menu.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object),
};

export default Menu;
