import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";
import API from "../utils/API";
import uuid from 'uuid-random';
function Books() {
  // Initialize books as an empty array
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({})
    useEffect(() => {
     // loadBooks();
    }, []);

    function loadBooks() {
      // Add code here to get all books from the database and store them using setBooks
      API.getBooks()
      .then((res) => {
        setBooks(res.data ) 
        console.log(res.data.volumeInfo)
      })
      .catch((err) => console.log(err));
    }

    function handleInputChange(event) {
      // add code to control the components here
      const { name, value } = event.target;
  
      // Updating the input's state
      setFormObject({ ...formObject,
        [name]: value
      });
    //  console.log(formObject)
    }

    function handleFormSubmit(event) {
      // add code here to post a new book to the api
     event.preventDefault();
     API.getBooks(formObject)
     .then(()=>   setFormObject({}))
        .then(()=>   loadBooks())
        .catch(err => console.log(err));
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter the book name to search</h1>
            </Jumbotron>
            <form>
              <Input onChange={handleInputChange}
                name="title"
                placeholder="Title (required)" />
              <FormBtn  disabled={!(formObject.title)}
                onClick={handleFormSubmit}>Search Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={uuid()}>
                    <Card 
                     title = {book.title}
          authors = {book.authors}
          description = {book.description}
          thumbnail = {book.thumbnail}
          infoLink = {book.infoLink}        />
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
