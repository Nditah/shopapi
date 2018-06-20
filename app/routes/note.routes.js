import express from 'express'
import * as notes from '../controllers/note.controller.js'

const noteRoute = express.Router();

// Create a new Note
noteRoute.post('/notes', notes.create);

// Retrieve all Notes
noteRoute.get('/notes', notes.findAll);

// Retrieve a single Note with noteId
noteRoute.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
noteRoute.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
noteRoute.delete('/notes/:noteId', notes.delete);

export default noteRoute