const express = require("express");
const db = require("../models");

const router = express.Router();

/* router.get("/api/book/:id", (req, res) => {
  db.Book.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});  */

module.exports = router;