const express = require("express");
const db = require("../models");
const axios = require("axios");

const router = express.Router();

router.get("/api/books", (req, res) => {
  const queryString = "https://www.googleapis.com/books/v1/volumes?q={title:harry%20potter}&key="+process.env.API_KEY;
  axios
    .get(queryString)
    .then(function (books) {
      console.log(books.data);
      res.json(books.data)
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
