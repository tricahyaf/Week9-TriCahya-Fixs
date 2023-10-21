const { findAllMovies, getMovieById, createNewMovie, updateMovie, destroyMovie} = require ('../controller/moviesController')

const router = require('express').Router()

router.get('/movie', findAllMovies)
router.get('/movie/:id', getMovieById)
router.post('/movie', createNewMovie)
router.patch('/movie/:id', updateMovie)
router.delete('/movie/:id', destroyMovie)

module.exports = router