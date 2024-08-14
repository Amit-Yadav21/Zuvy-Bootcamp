import Note from '../model/notesShema.js';
import User from '../model/userShema.js';

// Get all notes for the logged-in user
const getNotes = async (req, res, next) => {
    try {
        const decodeData = req.jwtData;
        if (!decodeData) {
            return res.status(401).json({ error: 'User not logged in' });
        }
        
        const notes = await Note.find({ user: decodeData.id }).populate('user', { username: 1 });
        res.status(200).json(notes);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Create a new note
const createNote = async (req, res, next) => {
    const { content, important } = req.body;

    try {
        const decodeData = req.jwtData;
        if (!decodeData) {
            return res.status(401).json({ error: 'User not logged in' });
        }

        const user = await User.findById(decodeData.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const note = new Note({
            content,
            important,
            user: user._id
        });

        const savedNote = await note.save();
        user.notes.push(savedNote._id);
        await user.save();

        res.status(201).json(savedNote);
    } catch (err) {
        next(err);
    }
};

// Update a note
const updateNote = async (req, res, next) => {
    const { content, important, newContent, newImportant } = req.body;
    const decodeData = req.jwtData;
    try {
        if (!decodeData) {
            return res.status(401).json({ error: 'User not logged in' });
        }

        const note = await Note.findOneAndUpdate(
            { content, important, user: decodeData.id },
            { content: newContent, important: newImportant },
            { new: true }
        );

        if (!note) {
            return res.status(404).json({ error: 'Note not found or user not authorized' });
        }

        res.status(200).json(note);
    } catch (err) {
        next(err);
    }
};

// Delete a note
const deleteNote = async (req, res, next) => {
    const { content } = req.body;
    const decodeData = req.jwtData;
    try {
        if (!decodeData) {
            return res.status(401).json({ error: 'User not logged in' });
        }

        // Find the note by content and user ID
        const note = await Note.findOneAndDelete({ content, user: decodeData.id });
        if (!note) {
            return res.status(404).json({ error: 'content not found'});
        }

        // Remove the note reference from the user's notes array
        await User.updateOne(
            { _id: decodeData.id },
            { $pull: { notes: note._id } }
        );

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

export { getNotes, createNote, updateNote, deleteNote };