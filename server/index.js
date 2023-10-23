const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
require('./modules/database/config')
const videoRouter = require('./router/videoRouter')
const userRouter = require('./router/userRouter')
const authRouter = require('./router/authRouter')

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/video', videoRouter)
app.use('/user', userRouter)
app.use('/', authRouter)

app.listen(process.env.PORT, () => {
  console.log(`the server is listening on port ${process.env.PORT}`)
})
