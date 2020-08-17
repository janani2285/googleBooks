import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import BookList from "../components/BookList";
import API from "../utils/API";
function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});
 // const isSaved = false;
  useEffect(() => {
    // loadBooks();
  }, []);

  function loadBooks() {
    // Add code here to get all books from the database and store them using setBooks
    API.getBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    // add code to control the components here
    const { name, value } = event.target;

    // Updating the input's state
    setFormObject({ ...formObject, [name]: value });
    //  console.log(formObject)
  }

  function handleFormSubmit(event) {
    // add code here to post a new book to the api
    event.preventDefault();
    API.getBooks(formObject)
      .then(() => setFormObject({}))
      .then(() => loadBooks())
      .catch((err) => console.log(err));
  }

  function saveBook(book) {
    API.saveBook(book)
      .then((res) => {
       // isSaved = true;
        loadBooks();
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>(REACT GOOGLE BOOK SEARCH)</h1>
      </Jumbotron>

      <Col size="m-12">
       
        <form>
          <h1>Enter the book name to search</h1>
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <FormBtn disabled={!formObject.title} onClick={handleFormSubmit}>
            Search Book
          </FormBtn>
        </form>
      </Col>
      <Col size="m-12">
        <br />
        <br />
      </Col>
      <Col size="m-12">
        <h1>Search Results</h1>

        {books.length ? (
          <List>
            {books.map((book) => (
              <ListItem key={book.id}>
                <BookList
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  thumbnail={book.image}
                  infoLink={book.link}
                  onClick={() => saveBook(book)}
                  btntype = "save"
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    </Container>
  );
}

export default Books;
