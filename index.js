require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server =express()

server.use(express.json())
server.use(cors())
server.use(helmet)

server.get('/', (req, res) => {
    res.send(`
        <h1>Web 44 is great!</h1>
    `)
})

server.use('*', (req, res, next) =>{
    res.json({message: 'web 44 is awesome indeed!'})
})


const {port} = require('./config')

server.listen(port, () =>{
    console.log(`listening on ${port}`)
})