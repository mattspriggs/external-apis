import { useEffect, useState } from 'react'
// import { getActivity } from '../apiClient/a/activity.ts'
import { Activity as ActivityType } from '../../models/Activity.ts'
import { getActivity } from '../apiClient.ts'

export default function Activity() {
  const [activity, setActivity] = useState<ActivityType | null>(null)

  async function fetchActivity() {
    const activityData = await getActivity()
    setActivity(activityData)
  }

  useEffect(() => {
    try {
      fetchActivity()
    } catch (error) {
      alert('Unable to get an activity')
    }
  }, [])

  return (
    <>
      <h2>Activity</h2>
      <p>If you find yourself bored: {activity?.activity}</p>
    </>
  )
}
