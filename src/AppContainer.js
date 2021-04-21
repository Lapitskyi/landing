import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import ThemeContext from './store/ThemeContext';

const AppContainer = ({
  storeT: {
    state: {
      themeToggle: { themeT },
      langToggle: { langT }
    }
  }
}) => {
  const [theme, setTheme] = useState(themeT);
  const [lang, setLang] = useState(langT);

  const toggleTheme = () => {
    setTheme(!!theme === false);
  };

  const langToggle = (id) => {
    setLang(
      // eslint-disable-next-line no-nested-ternary
      lang.map((l) => ((l.id === id) ? { ...l, lang: true }
        : (l.id !== id) ? { ...l, lang: false } : l))
    );
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
  storeT: {
    state: {
      themeToggle: {
        themeT: false
      },
      langToggle: {
        langT: []
      }
    }
  }

};
AppContainer.propTypes = {
  storeT: PropTypes.shape({
    state: PropTypes.shape({
      themeToggle: PropTypes.shape({
        themeT: PropTypes.bool
      }),
      langToggle: PropTypes.shape({
        langT: PropTypes.arrayOf(PropTypes.object)
      })
    })
  })
};

export default AppContainer;
