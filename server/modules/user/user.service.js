const UserRepository = require('./user.repository')

class UserService {
  userRepository = new UserRepository()
  async findAllUsers () {
    return await this.userRepository.findAllUsers()
  }

  async findUser (id) {
    return await this.userRepository.findUser(id)
  }

  async createUser (input) {
    return await this.userRepository.createUser(input)
  }

  async updateUser (id, input) {
    return await this.userRepository.updateUser(id, input)
  }

  async deleteUser (id) {
    return await this.userRepository.deleteUser(id)
  }

  async findUserByEmail (email) {
    return await this.userRepository.findUserByEmail(email)
  }
}

module.exports = new UserService()
