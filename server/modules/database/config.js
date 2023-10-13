const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Success conection to MongoDB'))
  .catch((error) => console.error('Error to conect to MongoDB:', error))

const db = mongoose.connection

module.exports = db
