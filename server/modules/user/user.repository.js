const User = require('../database/models/user')

class UserRepository {
  async findAllUsers () {
    return await User.find()
  }

  async findUser (id) {
    return await User.findById(id)
  }

  async createUser (input) {
    return await User.create(input)
  }

  async updateUser (id, input) {
    return await User.findByIdAndUpdate(id, input)
  }

  async deleteUser (id) {
    return await User.findByIdAndDelete(id)
  }

  async findUserByEmail (email) {
    return await User.findOne(email)
  }
}

module.exports = UserRepository
