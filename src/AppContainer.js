import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import ThemeContext from './store/ThemeContext';

const AppContainer = ({
  state: {
    themeToggle: { themeT },
    langToggle: { langT }
  }
}) => {
  const [theme, setTheme] = useState(themeT);
  const [lang, setLang] = useState(langT);

  const toggleTheme = () => {
    setTheme(!!theme === false);
  };

  const langToggle = () => {
    setLang(!!lang === false);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      lang,
      langToggle
    }}
    >
      <App theme={theme} />
    </ThemeContext.Provider>
  );
};
AppContainer.defaultProps = {
  state: {
    themeToggle: {
      themeT: false
    },
    langToggle: {
      langT: []
    }
  }
};
AppContainer.propTypes = {
  state: PropTypes.shape({
    themeToggle: PropTypes.shape({
      themeT: PropTypes.bool
    }),
    langToggle: PropTypes.shape({
      langT: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default AppContainer;
