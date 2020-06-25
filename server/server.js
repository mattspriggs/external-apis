const path = require('path')
const express = require('express')
const cors = require('cors')

const example = require('./routes/example')

const server = express()

server.use(express.json())
server.use(cors({ origin: 'http://localhost:8080' }))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/example', example)

module.exports = server
