import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from './layouts/MainLayout';

import './App.scss';

const App = ({ theme }) => {
  return (
    <div className={theme === false
      ? 'app-wrapper app-wrapper__white'
      : 'app-wrapper app-wrapper__dark'}
    >
      <MainLayout />
    </div>
  );
};

App.defaultProps = {
  theme: false,
};

App.propTypes = {
  theme: PropTypes.bool,
};
export default App;
