const express = require('express')
const router = express.Router()
const UserController = require('../modules/user/user.controller')

router.get('/', [], UserController.findUserByEmail)

module.exports = router
