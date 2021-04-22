import React from 'react';
import PropTypes from 'prop-types';
import '../scss/ThemeToggle.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const ThemeToggle = ({
  updateTheme: {
    theme,
    toggleTheme
  }
}) => {
  return (
    <div className="theme">
      <label htmlFor="checkbox">
        <input
          className="theme__input"
          type="checkbox"
          id="checkbox"
          checked={theme}
          onChange={() => toggleTheme(theme)}
        />
        <div className="theme__label">
          <svg className="theme__icon">
            <use href={`${sprite}#moon`} />
          </svg>
          <svg className="theme__icon">
            <use href={`${sprite}#sun`} />
          </svg>
          <div className="theme__ball" />
        </div>

      </label>
    </div>
  );
};
ThemeToggle.defaultProps = {
  updateTheme: PropTypes.shape({
    theme: false,
    toggleTheme: () => {}
  })
};
ThemeToggle.propTypes = {
  updateTheme: PropTypes.shape({
    theme: PropTypes.bool,
    toggleTheme: PropTypes.func
  })
};

export default ThemeToggle;
