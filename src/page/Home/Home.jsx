import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './components/TableContainer';

import './scss/Home.scss';
import withHoc from '../../hoc/withHoc';

import TodoContainer from './components/TodoContainer';

const Home = ({ stateApp }) => (
  <>
    <section>
      <TableContainer stateApp={stateApp} />
    </section>
    <section>
      <TodoContainer />
    </section>
  </>
);

Home.defaultProps = {
  stateApp: {
    tableArray: {
      tableBody: [],
      tableHeadlines: []
    }
  }
};
Home.propTypes = {
  stateApp: PropTypes.shape({
    tableArray: PropTypes.shape({
      tableBody: PropTypes.arrayOf(PropTypes.object),
      tableHeadlines: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default withHoc(Home);
