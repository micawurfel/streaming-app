const User = require('../database/models/user')

class UserRepository {
  async findUserByEmail (email) {
    return await User.findOne(email)
  }
}

module.exports = UserRepository
