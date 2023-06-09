// src/components/BookList.js

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBooks, addBook, updateBook, deleteBook } from "../redux/actions";

const BookList = ({ books, fetchBooks, addBook, updateBook, deleteBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleAddBook = () => {
    const newBook = {
      title,
      author,
      isbn,
    };
    addBook(newBook);
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const handleUpdateBook = (id) => {
    const updatedBook = {
      title,
      author,
      isbn,
    };
    updateBook(id, updatedBook);
  };

  const handleDeleteBook = (id) => {
    deleteBook(id);
  };

  return (
    <div>
      <h2>Book List</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
          <button onClick={() => handleUpdateBook(book.id)}>Update</button>
          <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, {
  fetchBooks,
  addBook,
  updateBook,
  deleteBook,
})(BookList);
