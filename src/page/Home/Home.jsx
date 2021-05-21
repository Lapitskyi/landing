import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './components/TableContainer';
import Todo from './components/Todo';

import './scss/Home.scss';

const Home = ({
  tableHeadlines,
  tableBody,
  val,
  onChange,
  t,
  todos,
  updateTodos
}) => (
  <>
    <section>
      <TableContainer tableHeadlines={tableHeadlines} tableBody={tableBody} />
    </section>
    <section>
      <Todo
        val={val}
        onChange={onChange}
        t={t}
        todos={todos}
        updateTodos={updateTodos}
      />
    </section>
  </>
);

Home.defaultProps = {
  tableBody: [],
  tableHeadlines: [],
  val: '',
  onChange: () => {},
  t: () => {},
  todos: [],
  updateTodos: () => {
  }
};
Home.propTypes = {
  tableBody: PropTypes.arrayOf(PropTypes.object),
  tableHeadlines: PropTypes.arrayOf(PropTypes.object),
  val: PropTypes.string,
  onChange: PropTypes.func,
  t: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object),
  updateTodos: PropTypes.func,
};

export default Home;
