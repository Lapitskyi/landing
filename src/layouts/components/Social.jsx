import React from 'react';
import '../scss/Social.scss';
import PropTypes from 'prop-types';
import sprite from '../../assets/spriteSvg/sprite.svg';

const Social = ({ social }) => {
  return (
    <ul className="social__list">
      {social.map((item) => (
        <li className="social__list-item" key={item.id}>
          <a className="social__list-link" href={item.link}>
            <svg className="social__list-icon">
              <use href={sprite + item.icon} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

Social.defaultProps = {
  social: []
};
Social.propTypes = {
  social: PropTypes.arrayOf(PropTypes.object)
};

export default Social;
