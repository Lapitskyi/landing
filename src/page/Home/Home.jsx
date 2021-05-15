import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './components/TableContainer';

import './scss/Home.scss';
import withHoc from '../../hoc/withHoc';

import TodoContainer from './components/TodoContainer';

const Home = ({ state }) => (
  <>
    <section>
      <TableContainer state={state} />
    </section>
    <section>
      <TodoContainer />
    </section>
  </>
);

Home.defaultProps = {
  state: {
    tableArray: {
      tableBody: [],
      tableHeadlines: []
    }
  }
};
Home.propTypes = {
  state: PropTypes.shape({
    tableArray: PropTypes.shape({
      tableBody: PropTypes.arrayOf(PropTypes.object),
      tableHeadlines: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default withHoc(Home);
