import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import withHoc from '../../../hoc/withHoc';
import '../scss/Todo.scss';

const TodoContainer = ({ stateApp }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const updateTodos = (e, todo) => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([...todos, todo]);
    }
    setText('');
  };

  return (
    <Todo
      stateApp={stateApp}
      todos={todos}
      setTodos={setTodos}
      text={text}
      setText={setText}
      updateTodos={updateTodos}
    />
  );
};
TodoContainer.defaultProps = {
  stateApp: {}
};
TodoContainer.propTypes = {
  stateApp: PropTypes.objectOf(PropTypes.isRequired)
};

export default withHoc(TodoContainer);