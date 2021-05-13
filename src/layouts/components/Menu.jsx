import React from 'react';
import '../scss/Menu.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const { t } = useTranslation();
  const nav = (t('nav', { returnObjects: true }));

  return (
    <ul className="menu__list">
      {nav.map((item) => (
        <li className="menu__list-item" key={item.id}>
          <NavLink to={item.link} className="menu__list-link">
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>

  );
};

Menu.defaultProps = {
};
Menu.propTypes = {
};

export default Menu;
