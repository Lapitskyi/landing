import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addTodos } from '../../redux/redusers/table-reducer';
import Home from './Home';
import useInput from '../../useHook/useInput';

const HomeContainer = ({
  tableHeadlines,
  tableBody,
  todos,
  ...props
}) => {
  const {
    val,
    onChange
  } = useInput('');
  const { t } = useTranslation();

  const updateTodos = (e, todo) => {
    e.preventDefault();
    if (todo !== '') {
      props.addTodos(todo);
    }
  };
  return (
    <Home
      tableHeadlines={tableHeadlines}
      tableBody={tableBody}
      val={val}
      onChange={onChange}
      t={t}
      todos={todos}
      updateTodos={updateTodos}
    />
  );
};

const mapStateToProps = ({ table }) => ({
  tableHeadlines: table.tableHeadlines,
  tableBody: table.tableBody,
  todos: table.todos
});

export default compose(connect(
  mapStateToProps, { addTodos }
))(HomeContainer);

HomeContainer.defaultProps = {
  tableBody: [],
  tableHeadlines: [],
  todos: [],
  addTodos: () => {
  }
};
HomeContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  tableBody: PropTypes.arrayOf(PropTypes.object),
  tableHeadlines: PropTypes.arrayOf(PropTypes.object),
  addTodos: PropTypes.func
};
