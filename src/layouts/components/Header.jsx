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
    themeT,
    langT
  },

}) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo" />
          </div>
          <Menu />
          <ThemeToggle
            themeT={themeT}
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
  stateApp: {
    social: [],
    themeT: false,
    langT: []
  },

  toggleTheme: () => {
  },
  langToggle: () => {
  }

};
Header.propTypes = {
  stateApp: PropTypes.shape({
    themeT: PropTypes.bool,
    langT: PropTypes.arrayOf(PropTypes.object),
    social: PropTypes.arrayOf(PropTypes.object),

  }),
  toggleTheme: PropTypes.func,
  langToggle: PropTypes.func
};

export default withHoc(Header);
