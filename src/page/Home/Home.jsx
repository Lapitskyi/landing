import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './components/TableContainer';

import './scss/Home.scss';
import withHoc from '../../hoc/withHoc';

import TodoContainer from './components/TodoContainer';

const Home = ({ storeT }) => {
  return (
    <>
      <section>
        <TableContainer storeT={storeT} />
      </section>
      <section>
        <TodoContainer />
      </section>
    </>
  );
};

Home.defaultProps = {
  storeT: {}
};
Home.propTypes = {
  storeT: PropTypes.objectOf(PropTypes.object)
};

export default withHoc(Home);
