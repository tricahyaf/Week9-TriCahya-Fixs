const {User} = require("../models");

const findAllUsers = async (req, res) => {
    try {
        const data = await User.findAll()

        const result = {
            status: 'ok',
            data: data
        }

        res.json(result)
    } catch (error) {
        console.log(error, '<<< error find all user')
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await User.findByPk(id)
        if (data === null) {
            return res.status(404).json({
                status: 'failed',
                message: `data user with id ${id} is not found`,
            })
        }

        res.json({
            status: 'ok',
            message: data
        })
    } catch (error) {
        console.log(error, '<<< error get user by id')
    }
}

const createNewUser = async (req, res) => {
    try {
        const {username, email, password} = req.body

        const newUser = await User.create({username: username, email: email, password: password})

        res.status(201).json({
            status: 'ok',
            data: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt
            }
        })
    } catch (error) {
        console.log(error, 'error create new User')
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const { username, email, password } = req.body
        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: `data user with id ${id} is not exists`
            })
        }

        user.username = username
        user.email = email
        user.password = password
        user.updatedAt = new Date()

        user.save()

        res.json({
            status:'ok',
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        })
    } catch (error) {
        console.log(error, '<-- error update user')
    }
}

const destroyUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: `data user with id ${id} is not exist`
            })
        }

        user.destroy()

        res.json({
            status: 'ok',
            message: `success delete user with id ${id}`
        })
    } catch (error) {
        console.log(error, '<-- error destroy user')
    }
}

module.exports = { findAllUsers, getUserById, createNewUser, updateUser, destroyUser };