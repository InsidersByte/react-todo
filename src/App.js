import React, { Component } from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    todo: '',
  };

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();

    const todo = { id: this.state.todos.length, text: this.state.todo };
    this.setState({ todos: [todo, ...this.state.todos], todo: '' });
  };

  removeTodo = (todo) => {
    const { id } = todo;

    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  };

  render() {
    const { todos, todo } = this.state;

    return (
      <div className="container">
        <div>
          <Title />

          <TodoForm
            todo={todo}
            onChange={this.onChange}
            addTodo={this.addTodo}
          />

          <TodoList
            todos={todos}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
