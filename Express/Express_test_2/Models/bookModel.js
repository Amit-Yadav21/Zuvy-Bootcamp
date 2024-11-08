import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  availability: { type: Boolean, default: true }
})

const Book = mongoose.model('book', bookSchema);

export default Book;