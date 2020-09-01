import axios from "axios";

export default {
  // Gets all books
  getBooksByTitle: function(searchItem) {
    return axios.get("/api/books/"+searchItem);
  },
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
