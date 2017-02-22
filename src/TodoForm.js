import React, { PropTypes } from 'react';
import './TodoForm.css';

const TodoForm = ({ todo, onChange, addTodo }) => (
  <form onSubmit={addTodo}>
    <input
      className="input"
      value={todo}
      onChange={onChange}
    />
  </form>
);

TodoForm.propTypes = {
  todo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
