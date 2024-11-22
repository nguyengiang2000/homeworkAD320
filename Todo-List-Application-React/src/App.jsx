import React, { Component } from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  // TODO: Initialize the state here to keep track of the todos array.
  // You can either use a constructor or initialize the state directly in the class.
  // If you're familiar with Hooks, you're welcome to use them instead.

  // TODO: Implement the addTodo function.
  // This function should take a text input and add it as a new todo item in the state.
  // Make sure to update the todos array in the state.
  
  addTodo = (newText) => {
    const newTodo = {
      text: newText
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        {/* TODO: Pass the addTodo function as a prop to the TodoForm component */}
        <TodoForm/>
        {/* TODO: Pass the todos array as a prop to the TodoList component */}
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
