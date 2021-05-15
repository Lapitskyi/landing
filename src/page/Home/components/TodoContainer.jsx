import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Todo from './Todo';
import withHoc from '../../../hoc/withHoc';
import '../scss/Todo.scss';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const { t } = useTranslation();

  const updateTodos = (e, todo) => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([...todos, todo]);
    }
    setText('');
  };

  return (
    <Todo
      t={t}
      todos={todos}
      setTodos={setTodos}
      text={text}
      setText={setText}
      updateTodos={updateTodos}
    />
  );
};

export default withHoc(TodoContainer);
