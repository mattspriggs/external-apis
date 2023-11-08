import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import request from 'superagent'

import welcome from './routes/welcome.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.get('/api/v1/affirmation', async (req, res) => {
  const response = await request.get('https://affirmations.dev')
  res.json(response.body)
})

server.get('/api/v1/lotr', async (req, res) => {
  const response = await request
    .get('https://the-one-api.dev/v2/movie')
    .set('Authorization', `${process.env.LOTRKEY}`)
  res.json(response.body.docs)
})

export default server
