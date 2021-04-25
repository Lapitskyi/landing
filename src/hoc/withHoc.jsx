import React, { useContext } from 'react';

import MyContext from '../store/MyContext';

const withHoc = (Component) => {
  return () => {
    const {
      stateApp,
      toggleTheme,
      langToggle
    } = useContext(MyContext);
    return (
      <>
        <Component
          stateApp={stateApp}
          toggleTheme={toggleTheme}
          langToggle={langToggle}
        />
      </>
    );
  };
};

export default withHoc;
