import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  updateText(event) {
    // console.log('updateText')
    // console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  addTodo() {
    this.props.addNewTodoFunc(this.state.text)
    this.serState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => this.updateText(event)}
          value={this.state.text}
      />
      <button onClick={() =>this.props.addNewTodoFunction(this.state.text)}>Add Todos</button>
      </div>
    )
  }
}

export default ToDoForm;
