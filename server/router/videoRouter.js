const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.send('Hello World')
})

router.get('/videos', (req, res) =>{
    res.send('Lista de vidoes')
})

router.get('/videos/:id', (req, res) =>{
    res.send('soy un video')
})

module.exports = router;