// src/redux/sagas.js

import { takeEvery, call, put } from "redux-saga/effects";
import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
} from "./actions";
import bookApi from "../api/bookApi";

function* fetchBooksSaga() {
  try {
    const books = yield call(bookApi.getAllBooks);
    yield put({ type: FETCH_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    console.error("Error while fetching books:", error);
  }
}

function* addBookSaga(action) {
  try {
    const newBook = yield call(bookApi.createBook, action.payload);
    yield put({ type: ADD_BOOK_SUCCESS, payload: newBook });
  } catch (error) {
    console.error("Error while adding book:", error);
  }
}

function* updateBookSaga(action) {
  try {
    const { id, updatedBook } = action.payload;
    const updated = yield call(bookApi.updateBook, id, updatedBook);
    yield put({ type: UPDATE_BOOK_SUCCESS, payload: updated });
  } catch (error) {
    console.error("Error while updating book:", error);
  }
}

function* deleteBookSaga(action) {
  try {
    const { id } = action.payload;
    yield call(bookApi.deleteBook, id);
    yield put({ type: DELETE_BOOK_SUCCESS, payload: id });
  } catch (error) {
    console.error("Error while deleting book:", error);
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
  yield takeEvery(ADD_BOOK, addBookSaga);
  yield takeEvery(UPDATE_BOOK, updateBookSaga);
  yield takeEvery(DELETE_BOOK, deleteBookSaga);
}

export default rootSaga;
