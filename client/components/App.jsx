import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'

function App () {
  const [welcomeStatement, setWelcome] = useState('')

  useEffect(() => {
    getWelcome()
      .then(res => {
        setWelcome(res.statement)
        return null
      })
  })

  return (
    <h1>{welcomeStatement}</h1>
  )
}

export default App
