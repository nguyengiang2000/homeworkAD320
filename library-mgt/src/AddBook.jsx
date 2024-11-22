import React, { useState } from "react";

const AddBook = ({ addBook }) => {
  // TODO: Initialize the state to keep track of the book title and author input fields.
  // You can either use a constructor or Hooks.
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    // TODO: Update the state with the new value from the input fields.
    // Use the name attribute of the input to update the correct state property.
    const { name, value } = e.target;
    console.log(e.target);
    if (name === "title") {
      setTitle(value);
    } else if (name === "author") {
      setAuthor(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Create a new book object using the state values for title and author.
    // Call the addBook function passed via props to add the new book to the books array.
    // After adding the book, reset the input fields in the state.
    if (title && author) {
      const newBook = { title, author };
      addBook(newBook);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          {/* TODO: Implement the input field for the book title.
          It should be controlled by the state. */}
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author: </label>
          {/* TODO: Implement the input field for the book author.
          It should be controlled by the state. */}
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
