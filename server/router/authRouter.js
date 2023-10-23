const express = require('express')
const router = express.Router()
const User = require('../modules/database/models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
  const { email, password } = req.body

  if (!password || typeof password !== 'string') {
    return res.status(401).json({ message: 'Contraseña no válida' })
  }

  try {
    const userExist = await User.findOne({ email })
    if (userExist) {
      return res.status(400).json({ message: 'The email is already register' })
    }

    const salt = bcrypt.genSaltSync(10)

    const user = await User.create({
      email,
      password: bcrypt.hashSync(password, salt)
    })

    generateToken(user, res)

    res.status(200).json({ message: 'The user has successfully registered' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Email does not exist' })
    }
    const validPass = bcrypt.compareSync(password, user.password)
    if (!validPass) {
      return res.status(400).json({ message: 'Wrong password' })
    }

    generateToken(user, res)

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// create token
function generateToken (user, res) {
  const userData = {
    id: user._id,
    email: user.email
  }
  const token = jwt.sign(userData, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN })
  res.cookie('token', token)
}

// validate token (rutas protegidas)
async function verifyToken (req, res, next) {
  try {
    const { token } = req.cookies
    if (!token) {
      return res.json('Please, login')
    }
    const verify = await jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = await User.findById(verify._id)
    next()
  } catch (error) {
    return next(error)
  }
}

router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.find()
    if (!user) {
      return res.json({ message: 'No user found' })
    }
    return res.json({ user })
  } catch (error) {
    return res.json({ error })
  }
})

router.post('/logout', (req, res) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(401).json({ error: 'no token' })
  } else {
    res.clearCookie('token')
    res.send('log out success')
  }
})

module.exports = router
