import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import MyContext from './store/MyContext';

const AppContainer = ({
  storeT
}) => {
  const [stateApp, setStateApp] = useState(storeT.state);

  const toggleTheme = () => {
    setStateApp(
      {
        ...stateApp,
        themeT: !!stateApp.themeT === false
      }
    );
  };

  const langToggle = (id) => {
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
      toggleTheme,
      langToggle
    }}
    >
      <App stateApp={stateApp} />
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
