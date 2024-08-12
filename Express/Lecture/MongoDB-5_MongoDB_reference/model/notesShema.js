import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Note = mongoose.model('Note', noteSchema);
export default Note;