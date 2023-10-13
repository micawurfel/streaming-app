const express = require('express')
const router = express.Router()
const UserController = require('../modules/user/user.controller')

router.get('/all', [], UserController.findAllUsers)
router.get('/:id', [], UserController.findUser)
router.post('/', [], UserController.createUser)
router.put('/:id', [], UserController.updateUser)
router.delete('/:id', [], UserController.deleteUser)

module.exports = router
