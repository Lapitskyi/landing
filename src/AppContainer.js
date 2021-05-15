import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import MyContext from './store/MyContext';
import useToggleTheme from './useHook/useToggleTheme';
import useToggleLang from './useHook/useToggleLang';

const AppContainer = ({
  state
}) => {
  const { theme, toggleTheme } = useToggleTheme(false);
  const { lang, toggleLang } = useToggleLang();

  return (
    <MyContext.Provider value={{
      state,
      theme,
      toggleTheme,
      lang,
      toggleLang
    }}
    >
      <App theme={theme} />
    </MyContext.Provider>
  );
};
AppContainer.defaultProps = {
  state: {}
};
AppContainer.propTypes = {
  state: PropTypes.shape({
    nav: PropTypes.arrayOf(PropTypes.object),
    auth: PropTypes.objectOf(PropTypes.object),
    tableArray: PropTypes.shape({
      tableHeadlines: PropTypes.arrayOf(PropTypes.object),
      tableBody: PropTypes.arrayOf(PropTypes.object)
    }),
    social: PropTypes.arrayOf(PropTypes.object)
  })
};

export default AppContainer;
