import React from 'react';
import Login from './Login';
import StoreContext from '../../store/StoreContext';

const LoginContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (value) => (<Login storeT={value} />)
      }
    </StoreContext.Consumer>
  );
};

export default LoginContainer;
