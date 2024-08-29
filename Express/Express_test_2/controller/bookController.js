import Book from '../Models/bookModel.js'

// Get all books (available to all authenticated users)
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new book (admin only)
const addBook = async (req, res) => {
    try {
        const { title, author, genre, availability } = req.body;
        const book = new Book({ title, author, genre, availability });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add multiple books (admin only)
const addmultipleBooks = async (req, res) => {
    try {
        const booksArray = req.body.books; // Expect an array of books
        if (!Array.isArray(booksArray)) {
            return res.status(400).json({ error: 'Books data should be an array' });
        }

        // Create and save multiple books
        const books = await Book.insertMany(booksArray);
        res.status(201).json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a book's details (admin only)
const updateBook = async (req, res) => {
    try {
        const { title, author, genre, availability } = req.body;
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, genre, availability },
            { new: true }
        );
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a book (admin only)
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getAllBooks, addBook, addmultipleBooks, updateBook, deleteBook };