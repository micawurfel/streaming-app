const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

require('./modules/database/config')
const videoRouter = require('./router/videoRouter')
const authRouter = require('./router/authRouter')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/', videoRouter)
app.use('/', authRouter)

app.listen(process.env.PORT, () => {
  console.log(`the server is listening on port ${process.env.PORT}`)
})
