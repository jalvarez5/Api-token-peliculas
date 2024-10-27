const express = require('express');
const Movie = require('../models/Movie');
const auth = require('../middleware/auth');
const router = express.Router();

//  crear una película
router.post('/', auth, async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
});

// obtener todas las películas
router.get('/', auth, async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

module.exports = router;