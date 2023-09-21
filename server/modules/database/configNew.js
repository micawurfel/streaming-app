const mongoose = require('mongoose')

const dbUrl = `mongodb+srv://dbUser:${process.env.PASSWORD}@cluster0.xymqaan.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión a MongoDB exitosa')
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error)
  })
