const {Movie} = require("../models");

const findAllMovies = async (req, res) => {
    try {
        const data = await Movie.findAll()

        const result = {
            status: 'ok',
            data: data
        }

        res.json(result)
    } catch (error) {
        console.log(error, '<<< error find all movies')
    }
}

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Movie.findByPk(id)
        if (data === null) {
            return res.status(404).json({
                status: 'failed',
                message: `data movie with id ${id} is not found`,
            })
        }

        res.json({
            status: 'ok',
            message: data
        })
    } catch (error) {
        console.log(error, '<<< error get movie by id')
    }
}

const createNewMovie = async (req, res) => {
    try {
        const {title, genres, year} = req.body

        const newMovie = await Movie.create({title: title, genres: genres, year: year})

        res.status(201).json({
            status: 'ok',
            data: {
                id: newMovie.id,
                title: newMovie.title,
                genres: newMovie.genres,
                year: newMovie.year,
                createdAt: newMovie.createdAt,
                updatedAt: newMovie.updatedAt
            }
        })
    } catch (error) {
        console.log(error, 'error create new Movie')
    }
}

const updateMovie = async (req, res) => {
    try {
        const {id} = req.params
        const { title, genres, year } = req.body
        const movie = await Movie.findByPk(id)

        if (!movie) {
            return res.status(404).json({
                status: 'failed',
                message: `data movie with id ${id} is not exists`
            })
        }

        movie.title = title
        movie.genres = genres
        movie.year = year
        movie.updatedAt = new Date()

        movie.save()

        res.json({
            status:'ok',
            data: {
                id: movie.id,
                title: movie.title,
                genres: movie.genres,
                year: movie.year,
                createdAt: movie.createdAt,
                updatedAt: movie.updatedAt
            }
        })
    } catch (error) {
        console.log(error, '<-- error update movie')
    }
}

const destroyMovie = async (req, res) => {
    try {
        const { id } = req.params

        const movie = await Movie.findByPk(id)

        if (!movie) {
            return res.status(404).json({
                status: 'failed',
                message: `data movie with id ${id} is not exist`
            })
        }

        movie.destroy()

        res.json({
            status: 'ok',
            message: `success delete movie with id ${id}`
        })
    } catch (error) {
        console.log(error, '<-- error destroy movie')
    }
}

module.exports = { findAllMovies, getMovieById, createNewMovie, updateMovie, destroyMovie };