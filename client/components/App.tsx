import { useState, useEffect } from 'react'
import { getWelcome } from '../apiClient.ts'
import Activity from './Activity.tsx'
import Affirmation from './Affirmation.tsx'
import Lotr from './Lotr.tsx'
function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  // const [activity, setActivity] = useState(Activity)

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <div>
        <Activity />
        <Affirmation />
        <Lotr />
      </div>
    </>
  )
}

export default App
