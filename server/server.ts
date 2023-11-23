import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import request from 'superagent'
import 'dotenv/config'
import welcome from './routes/welcome.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

server.get('/api/v1/affirmation', async (req, res) => {
  try {
    const response = await request.get('https://affirmations.dev')
    res.json(response.body)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Unable to load affirmations' })
  }
})

server.get('/api/v1/lotr', async (req, res) => {
  try {
    const response = await request
      .get('https://the-one-api.dev/v2/movie')
      .set('Authorization', `${process.env.LOTRKEY}`)
    res.json(response.body.docs)
  } catch (error) {
    res
      .sendStatus(500)
      .json({ message: 'Unable to load Lord of the Rings movie facts' })
  }
})

export default server
