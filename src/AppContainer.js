import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import App from './App';
import MyContext from './store/MyContext';
import useLocalStorage from './useHook/useLocalStorage';

const AppContainer = ({
  storeT
}) => {
  const [stateApp, setStateApp] = useState(storeT.state);

  const { i18n } = useTranslation();
  const [lng, setLng] = useLocalStorage('lang');
  const [theme, setTheme] = useLocalStorage('theme');

  const toggleTheme = () => {
    setTheme(!!theme === false);
  };

  const langToggle = (id) => {
    i18n.changeLanguage(id);
    setLng(id);
    setStateApp(
      {
        ...stateApp,
        langT: stateApp.langT.map((itemLang) => {
          if (itemLang.id === id) {
            return {
              ...itemLang,
              lang: true
            };
          }
          if (itemLang.id !== id) {
            return {
              ...itemLang,
              lang: false
            };
          }
          return itemLang;
        })
      }
    );
  };

  return (
    <MyContext.Provider value={{
      stateApp,
      theme,
      lng,
      toggleTheme,
      langToggle
    }}
    >
      <App theme={theme} />
    </MyContext.Provider>
  );
};
AppContainer.defaultProps = {
  storeT: {}
};
AppContainer.propTypes = {
  storeT: PropTypes.objectOf(PropTypes.object)
};

export default AppContainer;
