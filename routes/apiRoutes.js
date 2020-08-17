const express = require("express");
const db = require("../models");
const axios = require("axios");

const router = express.Router();

router.get("/api/books", (req, res) => {
  const queryString = "https://www.googleapis.com/books/v1/volumes?q={title:harry%20potter}&limit=10&key="+process.env.API_KEY;
  axios
    .get(queryString)
    .then(function (books) {
     // console.log(books.data);
      const bookDetails = books.data.items.map((book)=>{
       
        return ({
          "id" : book.id,
          "title" : book.volumeInfo.title,
          "authors" : book.volumeInfo.authors,
          "description" : book.volumeInfo.description,
          "image" : book.volumeInfo.imageLinks.thumbnail,
          "link" : book.volumeInfo.infoLink
        })
      })
    
      res.json(bookDetails)
    })
    .catch((err) => res.status(400).send(err));
});

router.post("/api/books", (req, res) => {
  console.log("Inside post method")
  console.log(req.body)
  db.Book
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

module.exports = router;
