const { findAllMovies, getMovieById, createNewMovie, updateMovie, destroyMovie} = require ('../controller/moviesController')
const { findAllUsers, getUserById, createNewUser, updateUser, destroyUser} = require ('../controller/usersController')

const router = require('express').Router()

router.get('/movie', findAllMovies)
router.get('/movie/:id', getMovieById)
router.post('/movie', createNewMovie)
router.patch('/movie/:id', updateMovie)
router.delete('/movie/:id', destroyMovie)

router.get('/user', findAllUsers)
router.get('/user/:id', getUserById)
router.post('/user', createNewUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', destroyUser)

module.exports = router