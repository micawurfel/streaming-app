const mongoose = require('mongoose')

const dbUrl = `mongodb+srv://dbUser:qABxOaWlWNyPfnbc@cluster0.xymqaan.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Success conection to MongoDB'))
  .catch((error) => console.error('Error to conect to MongoDB:', error))

const db = mongoose.connection

module.exports = db