import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const server = express()
server.use(express.json())

server.get('')
