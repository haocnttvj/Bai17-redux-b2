// src/redux/actions.js

export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const DELETE_BOOK = "DELETE_BOOK";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const updateBook = (id, updatedBook) => ({
  type: UPDATE_BOOK,
  payload: { id, updatedBook },
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: { id },
});
