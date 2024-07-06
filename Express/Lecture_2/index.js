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
        content: "HTML is easy and also hard",
        importent: false,
    },
    {
        id: 3,
        content: "GET and PUT request",
        importent: false,
    }
]

// localhost:3003/notes
// localhost:3003/notes?sort=desc
app.get('/notes', (req, res) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        notes.sort((a, b) => a.id - b.id);
    } else if (sort === 'desc') {
        notes.sort((a, b) => b.id - a.id);
    }

    // If no sort parameter provided, return all notes
    res.json(notes);
});

// localhost:3003/notes/limit?limit=1
app.get('/notes/limit', function (req, res) {
    // console.log(req.query);

    const limit = req.query.limit;
    if (limit != undefined && limit > 0) {
        return res.json(notes.slice(0, limit))
    }
    // res.json(notes)
})

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