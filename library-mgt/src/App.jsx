import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import AddBook from './AddBook';
import About from './About';
import '../public/styles.css';

class App extends Component {
  // TODO: Initialize the state to keep track of the list of books.
  // You can either use a constructor or initialize the state directly in the class.
  // If you're familiar with Hooks, you're welcome to use them instead.

  // TODO: Implement the addBook function.
  // This function should take a book object as input and add it to the books array in the state.
  // Make sure to update the books array in the state.
  constructor() {
    super();
    this.state = {
      books: [
        { title: 'Adventure Time', author: 'Author 1' },
        { title: 'Courage The Cowardly Dog', author: 'Author 2' }
      ]
    };
  }

  // Function to add a book
  addBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook]
    }));
  };

  render() {
    const { books } = this.state;
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/add-book">Add Book</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Routes>
            {/* TODO: Pass the books array to the Books component via props */}
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/add-book" element={<AddBook addBook={this.addBook} />} />
            <Route path="/about" element={<About />} />
            {/* TODO: Pass the addBook function as a prop to the AddBook component */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
