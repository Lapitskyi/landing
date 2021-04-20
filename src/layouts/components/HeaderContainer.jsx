import React from 'react';
import Header from './Header';
import StoreContext from '../../store/StoreContext';

const HeaderContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (storeT) => (<Header storeT={storeT} />)
      }
    </StoreContext.Consumer>
  );
};
export default HeaderContainer;
