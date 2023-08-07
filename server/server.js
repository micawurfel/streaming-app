const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3001

app.use(bodyParser.urlencoded({extends:true}))
app.use(bodyParser.json());


const videoRouter = require('./router/videoRouter')
app.use('/', videoRouter)


app.listen(PORT, ()=>{
    console.log(`el servidor esta escuchando en el puerto ${PORT}`)
})