import React from 'react';
import PropTypes from 'prop-types';

import '../scss/AuthLinks.scss';
import { NavLink } from 'react-router-dom';

const AuthLinks = ({
  link,
  t
}) => (
  <ul className="auth-link__list">
    {
      link.map((item) => (
        <li className="auth-link__list-item" key={item.id}>
          <NavLink className="auth-link__list-link" to={item.path}>{t(`${item.title}`)}</NavLink>
        </li>
      ))
    }
  </ul>
);

AuthLinks.defaultProps = {
  t: {},
  link: []
};
AuthLinks.propTypes = {
  t: PropTypes.func,
  link: PropTypes.arrayOf(PropTypes.object)
};

export default AuthLinks;
