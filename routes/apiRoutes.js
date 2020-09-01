const express = require("express");
const db = require("../models");
const axios = require("axios");

const router = express.Router();

router.get("/api/books", (req, res) => {
  const queryString = "https://www.googleapis.com/books/v1/volumes?&key="+process.env.API_KEY;
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


router.get("/api/books/:searchItem", (req, res) => {
  const searchItem = req.params.searchItem;
 // console.log(req.params.searchItem[title])
  const queryString = `https://www.googleapis.com/books/v1/volumes?q={title:${req.params.searchItem}}&key=`+ process.env.API_KEY;
  axios
    .get(queryString)
    .then(function (books) {
     // console.log(books.data);
      const bookDetails = books.data.items.map((book)=>{
      // console.log("book",book)
        return ({
          "id" : book.id,
          "title" : book.volumeInfo.title,
          "authors" : book.volumeInfo.authors,
          "description" : book.volumeInfo.description,
          "image" : book.volumeInfo.imageLinks.thumbnail,
          "link" : book.volumeInfo.infoLink
        })
      })
     // console.log("bookDetails",bookDetails)
      res.json(bookDetails)
    })
    .catch((err) => res.status(400).send(err));
});

router.post("/api/books", (req, res) => {
  db.Book
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

router.get("/api/savedBooks", (req, res) => {
  db.Book
  .find({})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});


router.delete("/api/books/:id", (req, res) => {
  
  db.Book
.deleteOne({ id: req.params.id })
.then(dbModel => {
 
  res.json(dbModel)
})
.catch(err => {
  res.status(422).json(err)
 // console.log(err)
});
});


module.exports = router;
