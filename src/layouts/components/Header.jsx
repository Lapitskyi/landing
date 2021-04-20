import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Header.scss';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Social from './Social';
import LangText from './LangText';
import ThemeContext from '../../store/ThemeContext';

const Header = ({
  storeT: {
    state: {
      menu,
      social,
    }
  }
}) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <img className="logo__img" src="https://via.placeholder.com/200x50" alt="logo" />
          </div>

          <Menu menu={menu} />

          <ThemeContext.Consumer>
            {
              (value) => (<ThemeToggle updateTheme={value} />)
            }
          </ThemeContext.Consumer>

          <LangText />

          <Social social={social} />

        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  storeT: {
    state: {
      menu: [],
      social: []
    },
  }
};
Header.propTypes = {
  storeT: PropTypes.shape({
    state: PropTypes.shape({
      menu: PropTypes.arrayOf(PropTypes.object),
      social: PropTypes.arrayOf(PropTypes.object),
    })
  }),
};

export default Header;
