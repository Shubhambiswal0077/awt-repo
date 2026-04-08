const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/Note');

const app = express();
const port = 8080; // Using port 8080 instead of 3000

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/notesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to display all notes
app.get('/', async (req, res) => {
  try {
    const notes = await Note.find(); // Get all notes from database
    res.render('index', { notes }); // Render index.ejs with notes data
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving notes');
  }
});

// Route to add a new note
app.post('/add', async (req, res) => {
  try {
    const { title, content } = req.body; // Get title and content from form
    const newNote = new Note({ title, content }); // Create new note
    await newNote.save(); // Save to database
    res.redirect('/'); // Redirect back to home page
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding note');
  }
});

// Route to delete a note
app.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get note ID from URL
    await Note.findByIdAndDelete(id); // Delete note from database
    res.redirect('/'); // Redirect back to home page
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting note');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Notes app listening at http://localhost:${port}`);
});