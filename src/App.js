import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from './layouts/MainLayout';

import './App.scss';

const App = ({ themeT }) => {
  return (
    <div className={!themeT
      ? 'app-wrapper app-wrapper__white'
      : 'app-wrapper app-wrapper__dark'}
    >
      <MainLayout />
    </div>
  );
};

App.defaultProps = {
  themeT: false,
};

App.propTypes = {
  themeT: PropTypes.bool,
};
export default App;
