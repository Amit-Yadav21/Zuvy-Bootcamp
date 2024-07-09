import express from 'express'
const app = express();

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

// localhost:3003/notes?sort=desc&limit=1
app.get('/notes', (req, res) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        notes.sort((a, b) => a.content > b.content ? 1 : -1);
    } else if (sort === 'desc') {
        notes.sort((a, b) => b.content > a.content ? 1 : -1);
    }

    const limit = Number(req.query.limit);
    if (limit > 0 && limit <= notes.length) {
        return res.json(notes.slice(0, limit));
    }
    else if (limit > notes.length) {
        return res.status(404).json({ message: "Limit exceeds the number of notes available" });
    }

    // If no sort parameter provided, return all notes
    res.json(notes);
});

// localhost:3003/note/1
app.get('/note/:id', function (req, res) {
    const id = req.params.id;
    // console.log(id);
    const note = notes.filter(note => note.id == id)
    if (note.length === 0) {
        return res.status(404).json({ msg: 'Notes does not exist ?' })
    }
    res.json(note)
})

app.listen(3003, function () {
    console.log("Server is is runnig port 3003");
})