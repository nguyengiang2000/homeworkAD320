import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) return;
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  };

  // TODO: Implement the render method.
  // The render method should return a form containing an input field and a submit button.
  // The input field should be controlled by the state.

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  
}

export default TodoForm;

