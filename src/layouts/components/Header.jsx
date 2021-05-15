import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Header.scss';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Social from './Social';
import LangText from './LangText';

import withHoc from '../../hoc/withHoc';

const Header = ({
  langToggle,
  toggleTheme,
  stateApp: {
    social,
    langT,
    nav
  },
  theme

}) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo" />
          </div>
          <Menu nav={nav} />
          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <LangText
            langT={langT}
            langToggle={langToggle}
          />
          <Social social={social} />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  theme: false,
  stateApp: {
    social: [],
    langT: [],
    nav: []
  },

  toggleTheme: () => {
  },
  langToggle: () => {
  }

};
Header.propTypes = {
  theme: PropTypes.bool,
  stateApp: PropTypes.shape({
    nav: PropTypes.arrayOf(PropTypes.object),
    langT: PropTypes.arrayOf(PropTypes.object),
    social: PropTypes.arrayOf(PropTypes.object),

  }),
  toggleTheme: PropTypes.func,
  langToggle: PropTypes.func
};

export default withHoc(Header);
