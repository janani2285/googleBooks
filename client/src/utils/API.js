import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("api call")
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getSavedBooks: function() {
    return axios.get("/api/savedBooks/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
