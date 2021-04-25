import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './components/TableContainer';

import './scss/Home.scss';
import withHoc from '../../hoc/withHoc';

import TodoContainer from './components/TodoContainer';

const Home = ({ stateApp }) => {
  return (
    <>
      <section>
        <TableContainer stateApp={stateApp} />
      </section>
      <section>
        <TodoContainer />
      </section>
    </>
  );
};

Home.defaultProps = {
  stateApp: {}
};
Home.propTypes = {
  stateApp: PropTypes.objectOf(PropTypes.object)
};

export default withHoc(Home);
