import React from 'react';
import StoreContext from '../store/StoreContext';
import MyContext from '../store/MyContext';

const withHoc = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <StoreContext.Consumer>
          {
            (storeT) => (
              <MyContext.Consumer>
                {
                  ({
                    theme,
                    toggleTheme,
                    lang,
                    langToggle,
                  }) => (
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
                  )
                }
              </MyContext.Consumer>
            )
          }
        </StoreContext.Consumer>
      );
    }
  };
};

export default withHoc;
