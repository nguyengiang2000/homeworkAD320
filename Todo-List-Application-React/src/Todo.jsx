import React from 'react';

function Todo({ todo }) {
  return (
    <li>
      <input type="checkbox" />
      {todo.text}
    </li>
  );
}

export default Todo;

