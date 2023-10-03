const userService = require('./user.service')

class UserController {
  async findUserByEmail (req, res) {
    try {
      const email = req.query.email
      const userFound = await userService.findUserByEmail({ email })
      if (userFound) {
        res.status(200).json(userFound)
      } else {
        res.json('The user doesnt exist')
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new UserController()
