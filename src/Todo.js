import React, { PropTypes } from 'react';
import './Todo.css';

const Todo = ({ todo, removeTodo }) => {
  const { text } = todo;

  const remove = () => removeTodo(todo);

  return (
    <li
      className="todo"
      onClick={remove}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
