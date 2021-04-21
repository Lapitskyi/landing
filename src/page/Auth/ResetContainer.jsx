import React from 'react';
import StoreContext from '../../store/StoreContext';
import Reset from './Reset';

const ResetContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (value) => (<Reset storeT={value} />)
      }
    </StoreContext.Consumer>
  );
};
export default ResetContainer;
