import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    // TODO: Implement the map function to iterate over the todos array
    // and render each todo as a Todo component.
    // Each Todo component should receive the todo object as a prop.
    const { todos } = this.props;

    return (
      <ul>
        {/* Your code here to map over todos */}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
