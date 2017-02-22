import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
  })).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
