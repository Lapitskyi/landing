import React, { useContext } from 'react';
import StoreContext from '../store/StoreContext';
import MyContext from '../store/MyContext';

const withHoc = (Component) => {
  return () => {
    const storeT = useContext(StoreContext);
    const {
      theme,
      toggleTheme,
      lang,
      langToggle
    } = useContext(MyContext);
    return (
      <>
        <Component
          storeT={storeT}
          updateTheme={{
            theme,
            toggleTheme
          }}
          toggleLang={{
            lang,
            langToggle
          }}
        />

      </>
    );
  };
};

export default withHoc;
