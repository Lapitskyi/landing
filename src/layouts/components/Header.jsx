import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Header.scss';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Social from './Social';
import LangText from './LangText';

import withHoc from '../../hoc/withHoc';

const Header = ({
  lang,
  toggleLang,
  toggleTheme,
  state: {
    social,
    nav
  },
  theme

}) => (
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
          lang={lang}
          toggleLang={toggleLang}
        />
        <Social social={social} />
      </div>
    </div>
  </div>
);

Header.defaultProps = {
  theme: false,
  state: {
    social: [],
    langT: [],
    nav: []
  },
  lang: [],

  toggleTheme: () => {
  },
  toggleLang: () => {
  }

};
Header.propTypes = {
  theme: PropTypes.bool,
  state: PropTypes.shape({
    nav: PropTypes.arrayOf(PropTypes.object),
    langT: PropTypes.arrayOf(PropTypes.object),
    social: PropTypes.arrayOf(PropTypes.object),

  }),
  toggleTheme: PropTypes.func,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleLang: PropTypes.func
};

export default withHoc(Header);
