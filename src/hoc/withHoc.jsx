import React, { useContext } from 'react';

import MyContext from '../state/MyContext';

const withHoc = (Component) => {
  return () => {
    const {
      theme,
      state,
      toggleTheme,
      lang,
      toggleLang
    } = useContext(MyContext);

    return (
      <>
        <Component
          theme={theme}
          state={state}
          toggleTheme={toggleTheme}
          lang={lang}
          toggleLang={toggleLang}
        />
      </>
    );
  };
};

export default withHoc;
