import React from 'react';
import TableContainer from './components/TableContainer';
import StoreContext from '../../store/StoreContext';

import './scss/Home.scss';

const Home = () => {
  return (
    <>
      <section>
        <StoreContext.Consumer>
          {
            (storeT) => (<TableContainer storeT={storeT} />)
          }
        </StoreContext.Consumer>
      </section>
    </>
  );
};

export default Home;
