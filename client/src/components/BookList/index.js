import React from "react";
import Thumbnail from "../Thumbnail";
import SaveBtn from "../SaveBtn";
import { Col, Row, Container } from "../Grid";

function BookList({ id, title, authors, description, thumbnail, infoLink,onClick }) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
        
         <h3>{title}</h3>
         </Col>
         <Col size="md-6">
         <SaveBtn onClick={onClick}/>
         </Col>
      </Row>
      <h6>Written by {authors}</h6>
     <img
        src={thumbnail}
        alt={title}
        className="img-thumbnail rounded float-left"
      />

      <p>
        {description} <br />
      <a href={infoLink}>{infoLink}</a>
      </p>
    </Container>
  );
}

export default BookList;
