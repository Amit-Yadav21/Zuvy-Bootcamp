import jwt from 'jsonwebtoken'
const notes = [];

// Get all notes for the logged-in user
const getNotes = (req, res) => {
    if (notes.length === 0) {
        return res.status(404).json({ msg: 'Users not found' });
    }
    res.json(notes);
};

// Create a new note
const createNote = (req, res) => {
    const { content, important } = req.body;

    const authHeader = req.get('Authorization') || req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ msg: 'token not found' });
    }
    
    const token = authHeader.split(' ')[1];
    // console.log(token);
    
    const decodedToken = jwt.verify(token, 'amityadav222137');
    const newNote = {
        content: content,
        important: important,
        user: decodedToken.username,
    };
    notes.push(newNote);
    res.status(201).json(newNote);
};

export { getNotes, createNote };