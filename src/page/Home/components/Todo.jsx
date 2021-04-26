import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Todo.scss';

const Todo = ({
  stateApp: {
    langT,
    todoText
  },
  todos,
  text,
  setText,
  updateTodos
}) => {
  const a = langT.filter((item) => item.lang === true);
  return (
    <div className="todo">
      <h3 className="todo__title"> Todo </h3>
      <form className="todo__form">
        <input
          className="todo__form-input"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="todo__form-btn"
          type="submit"
          onClick={(e) => updateTodos(e, text)}
        >
          addTodo
        </button>
      </form>
      {todos.length === 0 && (
        <p className="todo__text">
          {todoText[`${a[0].id}`]}
        </p>
      )}

      <ul className="todo__list">
        {todos?.map((item, index) => (
          <li className="todo__list-item" key={index.toString()}>
            <div>{(index + 1)}</div>
            <p className="todo__text">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
Todo.defaultProps = {
  todos: [],
  text: '',
  setText: () => {
  },
  updateTodos: () => {
  },
  stateApp: {
    langT: [],
    todoText: {}
  },
};
Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  setText: PropTypes.func,
  updateTodos: PropTypes.func,

  stateApp: PropTypes.shape({
    langT: PropTypes.arrayOf(PropTypes.object),
    todoText: PropTypes.objectOf(PropTypes.string)
  })
};

export default Todo;
