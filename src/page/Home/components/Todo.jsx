import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Todo.scss';

const Todo = ({
  t,
  todos,
  val,
  onChange,
  updateTodos
}) => (
  <div className="todo">
    <h3 className="todo__title"> Todo </h3>
    <form className="todo__form">
      <input
        className="todo__form-input"
        type="text"
        value={val}
        onChange={onChange}
      />
      <button
        className="todo__form-btn"
        type="submit"
        onClick={(e) => updateTodos(e, val)}
      >
        addTodo
      </button>
    </form>
    {todos.length === 0 && (
      <p className="todo__text">
        {t('todoText')}
      </p>
    )}

    <ul className="todo__list">
      {todos?.map((item) => (
        <li className="todo__list-item" key={item.id}>
          <div>{item.id}</div>
          <p className="todo__text">{item.todo}</p>
        </li>
      ))}
    </ul>
  </div>
);

Todo.defaultProps = {
  val: '',
  t: () => {
  },
  onChange: () => {
  },
  todos: [],
  updateTodos: () => {
  }
};
Todo.propTypes = {
  val: PropTypes.string,
  t: PropTypes.func,
  onChange: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object),
  updateTodos: PropTypes.func,

};

export default Todo;
