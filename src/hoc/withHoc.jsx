import React, { useContext } from 'react';

import MyContext from '../store/MyContext';

const withHoc = (Component) => {
  return () => {
    const {
      theme,
      stateApp,
      toggleTheme,
      langToggle
    } = useContext(MyContext);

    return (
      <>
        <Component
          theme={theme}
          stateApp={stateApp}
          toggleTheme={toggleTheme}
          langToggle={langToggle}
        />
      </>
    );
  };
};

export default withHoc;
