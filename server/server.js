const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const videoRouter = require('./router/videoRouter')
const { connectDB } = require('./modules/database/config')

async function run () {
  await connectDB()

  const PORT = 3001

  app.use(bodyParser.urlencoded({ extends: true }))

  app.use(bodyParser.json())

  app.use('/', videoRouter)

  app.listen(PORT, () => {
    console.log(`el servidor esta escuchando en el puerto ${PORT}`)
  })
}

run()
