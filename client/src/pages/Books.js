import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API"
function Books() {
  // Initialize books as an empty array
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      loadBooks();
    }, []);

    function loadBooks() {
      // Add code here to get all books from the database and store them using setBooks
      API.getBooks()
      .then((res) => {setBooks(res.data )})
      .catch((err) => console.log(err));
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter the book name to search</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <FormBtn>Search Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }

export default Books;
