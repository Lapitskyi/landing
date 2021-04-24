import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import MyContext from './store/MyContext';

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
      lang.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            lang: !!item.lang === false
          };
        }
        if (item.id !== id) {
          return {
            ...item,
            lang: false
          };
        }
        return item;
      })
    );
  };

  return (
    <MyContext.Provider value={{
      theme,
      toggleTheme,
      lang,
      langToggle
    }}
    >
      <App theme={theme} />
    </MyContext.Provider>
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
