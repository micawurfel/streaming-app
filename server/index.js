const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
require('./modules/database/config')
const videoRouter = require('./router/videoRouter')
const userRouter = require('./router/userRouter')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/video', videoRouter)
app.use('/user', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`the server is listening on port ${process.env.PORT}`)
})
