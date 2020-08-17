const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  id:{
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  authors: {
    type: [String],
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
