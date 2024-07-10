import express from 'express'
const router = express.Router()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        importent: true,
    },
    {
        id: 2,
        content: "GET and PUT request",
        importent: false,
    },
    {
        id: 3,
        content: "HTTP method is easy",
        importent: false,
    }
]

// Get all, sort and limit 
// localhost:3004/user?sort=desc&limit=1
router.get('/', (req, res) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        notes.sort((a, b) => a.content.localeCompare(b.content));
    } else if (sort === 'desc') {
        notes.sort((a, b) => b.content.localeCompare(a.content));
    }

    const limit = Number(req.query.limit);
    if (limit > 0 && limit <= notes.length) {
        return res.json(notes.slice(0, limit));
    }
    else if (limit > notes.length) {
        return res.status(404).json({ message: "Limit exceeds the number of notes available" });
    }

    // If no sort parameter provided and no limit. return all notes
    if (notes.length === 0) {
        return res.status(404).json({ msg: 'Users not found' });
    }
    res.json(notes);
});

// READ - GET user by id
// localhost:3004/user/1
router.get('/GetByID/:id', function (req, res) {
    const id = req.params.id;
    const note = notes.filter(item => item.id == id)
    if (note.length === 0) {
        return res.status(404).json({ msg: 'notes does not exist ?' })
    }
    res.json(note)
})

// CREATE - POST a new user
router.post('/Register', (req, res) => {
    const { content, importent } = req.body;
    const id = notes.length + 1;
    const newNote = { id, content, importent };
    notes.push(newNote);
    res.status(200).json({msg: "Register Successful" , NoteData:newNote});
});

// UPDATE - PUT update user by id
router.put('/updateByID/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = notes.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: 'User does not exist' });
    }
    notes[index] = { ...notes[index], ...req.body };
    res.json(notes[index]);
});

// DELETE - DELETE user by id
router.delete('/deleteByID/:id', (req, res) => {
    const id = Number(req.params.id)
    const initialLength = notes.length;
    notes = notes.filter(item => item.id != id);
    // console.log('After deleted item :',notes);
    if (notes.length === initialLength){
        return res.status(404).json({ msg: 'User does not exist...' });
    }
    res.json({msg:"User successfully deleted"});
});

export default router;