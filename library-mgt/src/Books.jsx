import React from 'react';

const Books = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {/* TODO: Implement the map function to iterate over the books array
        and display each book's title and author in a list item.
        The books array should be passed via props from the App component. */}            {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
