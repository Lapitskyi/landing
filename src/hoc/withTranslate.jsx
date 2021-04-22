import React from 'react';

const withTranslate = (Component) => {
  const TranslateComponent = (props) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };
  return TranslateComponent;
};

export default withTranslate;
