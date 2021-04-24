import React, { useState } from 'react';
import '../scss/Todo.scss';
import Todo from './Todo';

const TodoContainer = () => {
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
      todos={todos}
      setTodos={setTodos}
      text={text}
      setText={setText}
      updateTodos={updateTodos}
    />
  );
};

export default TodoContainer;
