const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const videoRouter = require('./router/videoRouter')
const authRouter = require('./router/authRouter')

// const { connectDB } = require('./modules/database/config')
const {db} = require('./modules/database/configNew')

require('dotenv').config()

// async function run () {
//   await connectDB()

  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(bodyParser.json())

  app.use('/', videoRouter)
  app.use('/', authRouter)  

  app.listen(process.env.PORT, () => {
    console.log(`the server is listening on port ${process.env.PORT}`)
  })
// }

// run()
