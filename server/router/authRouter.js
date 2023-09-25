const express = require('express')
const router = express.Router()
const User = require('../modules/database/models/user')

router.get('/login', async (req, res) => {
  const { email } = req.body
  const emailExist = await User.findOne({ email })
  if (emailExist) {
    res.sendStatus(201).json('valid')
  } else {
    res.sendStatus(400).json('the email doesnt exist')
  }
})

router.post('/register', async (req, res) => {
  const { email, password } = req.body
  res.json(await User.create({
    email,
    password
  }))
})

module.exports = router
