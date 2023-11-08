import { useEffect, useState } from 'react'
import { Lotr as LotrType } from '../../models/Lotr.ts'
import { getLotr } from '../apiClient.ts'

export default function Lotr() {
  const [lotr, setLotr] = useState<LotrType[] | null>(null)

  async function fetchLotr() {
    const lotrData = await getLotr()
    try {
      setLotr(lotrData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    try {
      fetchLotr()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h2>Lord of the Rings Movie Facts</h2>
      {lotr?.map((item) => (
        <>
          <br />
          <h3>{item.name}</h3>
          <p>RottenTomatoes Score: {item.rottenTomatoesScore}</p>
          <p>Budget in Millions: ${item.budgetInMillions}</p>
          <p>Box Office in Millions: ${item.boxOfficeRevenueInMillions}</p>
          <p>Runtime in minutes: {item.runtimeInMinutes}</p>
        </>
      ))}
    </>
  )
}
