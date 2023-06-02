// src/api/bookApi.js

let books = [];

const bookApi = {
  getAllBooks: () => {
    return new Promise((resolve) => {
      resolve([...books]);
    });
  },
  createBook: (book) => {
    return new Promise((resolve) => {
      const newBook = { ...book, id: Date.now() };
      books.push(newBook);
      resolve(newBook);
    });
  },
  updateBook: (id, updatedBook) => {
    return new Promise((resolve, reject) => {
      const index = books.findIndex((book) => book.id === id);
      if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        resolve(books[index]);
      } else {
        reject(new Error("Book not found"));
      }
    });
  },
  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      const index = books.findIndex((book) => book.id === id);
      if (index !== -1) {
        books.splice(index, 1);
        resolve();
      } else {
        reject(new Error("Book not found"));
      }
    });
  },
};

export default bookApi;
