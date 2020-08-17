const express = require("express");
const db = require("../models");
const axios = require("axios");

const router = express.Router();

router.get("/api/books", (req, res) => {
  const queryString = "https://www.googleapis.com/books/v1/volumes?q={title:harry%20potter}&limit=10&key="+process.env.API_KEY;
  axios
    .get(queryString)
    .then(function (books) {
      console.log(books.data);
      const bookDetails = books.data.items.map((book)=>{
       
        return ({
          "id" : book.id,
          "title" : book.volumeInfo.title,
          "authors" : book.volumeInfo.authors,
          "description" : book.volumeInfo.description,
          "thumbnail" : book.volumeInfo.imageLinks.thumbnail,
          "infoLink" : book.volumeInfo.infoLink
        })
      })
    
      res.json(bookDetails)
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
