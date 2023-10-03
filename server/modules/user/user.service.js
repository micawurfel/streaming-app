const UserRepository = require('./user.repository')

class UserService {
  userRepository = new UserRepository()

  async findUserByEmail (email) {
    return await this.userRepository.findUserByEmail(email)
  }
}

module.exports = new UserService()
