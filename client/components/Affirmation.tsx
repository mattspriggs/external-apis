import { useEffect, useState } from 'react'
import { Affirmation as AffirmationType } from '../../models/Affirmation.ts'
import { getAffirmation } from '../apiClient.ts'

export default function Affirmation() {
  const [affirmation, setAffirmation] = useState<AffirmationType | null>(null)

  async function fetchAffirmation() {
    const affirmationData = await getAffirmation()
    setAffirmation(affirmationData)
  }

  useEffect(() => {
    try {
      fetchAffirmation()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h2>Your Affirmation</h2>
      <p>{affirmation?.affirmation}</p>
    </>
  )
}
