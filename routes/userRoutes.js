const { findAllUsers, getUserById, createNewUser, updateUser, destroyUser} = require ('../controller/usersController')

const router = require('express').Router()

router.get('/user', findAllUsers)
router.get('/user/:id', getUserById)
router.post('/user', createNewUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', destroyUser)

module.exports = router