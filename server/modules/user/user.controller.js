const userService = require('./user.service')

class UserController {
  async findAllUsers (req, res) {
    try {
      const userFound = await userService.findAllUsers()
      res.status(200).json(userFound)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async findUser (req, res) {
    try {
      const { id } = req.params
      const userFound = await userService.findUser(id)
      res.status(200).json(userFound)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async createUser (req, res) {
    try {
      const { email, password } = req.body
      const userFound = await userService.createUser({ email, password })
      res.status(200).json(userFound)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async updateUser (req, res) {
    try {
      const { id } = req.params
      const { email, password } = req.body
      const userFound = await userService.updateUser(id, { email, password })
      res.status(200).json(userFound)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async deleteUser (req, res) {
    try {
      const { id } = req.params
      const userFound = await userService.deleteUser(id)
      res.status(200).json(userFound)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  // async findUserByEmail (req, res) {
  //   try {
  //     const email = req.query.email
  //     const userFound = await userService.findUserByEmail({ email })
  //     if (userFound) {
  //       res.status(200).json(userFound)
  //     } else {
  //       res.json('The user doesnt exist')
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message })
  //   }
  // }
}

module.exports = new UserController()
