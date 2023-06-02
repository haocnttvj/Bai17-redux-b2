// src/redux/reducers.js

import {
  FETCH_BOOKS_SUCCESS,
  ADD_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from "./actions";

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case UPDATE_BOOK_SUCCESS:
      const updatedBooks = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      return {
        ...state,
        books: updatedBooks,
      };
    case DELETE_BOOK_SUCCESS:
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      return {
        ...state,
        books: filteredBooks,
      };
    default:
      return state;
  }
};

export default reducer;
