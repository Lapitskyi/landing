import React from 'react';
import PropTypes from 'prop-types';

import '../scss/AuthLinks.scss';
import { NavLink } from 'react-router-dom';

const AuthLinks = ({ link }) => {
  return (
    <ul className="auth-link__list">
      {
        link.map((item) => (
          <li className="auth-link__list-item" key={item.id}>
            <NavLink className="auth-link__list-link" to={item.path}>{item.title}</NavLink>
          </li>
        ))
      }
    </ul>
  );
};

AuthLinks.defaultProps = {
  link: []
};
AuthLinks.propTypes = {
  link: PropTypes.arrayOf(PropTypes.object)
};

export default AuthLinks;
