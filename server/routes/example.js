const express = require('express')

const router = express.Router()

// GET /api/v1/example/
router.get('/', (req, res) => {
  try {
    res.send('What a great example')
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
