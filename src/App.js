import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['clean whiteboard', 'drink water', 'sleep']
    }
  }

  addNewTodo(todo) {
    console.log(todo)
    this.setState({
      todos: this.state.todo.concat(todo)
    })
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <ToDoForm/>
        <ToDoList todo_data={this.state.todos} />
      </div>
    );
  }
}

export default App;
