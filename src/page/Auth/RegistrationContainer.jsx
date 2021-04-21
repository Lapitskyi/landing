import React from 'react';
import Registration from './Registration';
import StoreContext from '../../store/StoreContext';

const RegistrationContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (value) => (<Registration storeT={value} />)
      }
    </StoreContext.Consumer>
  );
};

export default RegistrationContainer;
