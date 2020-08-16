const express = require("express");
const db = require("../models");
const axios = require("axios");

const router = express.Router();

router.get("/api/books", (req, res) => {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=harry%20potter&key=AIzaSyD8APCq50mp-5Jze-v7BH9n4io7wVTQUuA"
    )
    .then(function (books) {
     // console.log(books.data);
      res.json(books.data)
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
