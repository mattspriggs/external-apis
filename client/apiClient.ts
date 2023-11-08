import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import { Activity } from '../models/Activity.ts'
import { Affirmation } from '../models/Affirmation.ts'
import { Lotr } from '../models/Lotr.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
export async function getActivity(): Promise<Activity> {
  const response = await request.get('http://www.boredapi.com/api/activity/')
  return response.body
}

export async function getAffirmation(): Promise<Affirmation> {
  const response = await request.get(`${serverURL}/affirmation`)
  return response.body
}

export async function getLotr(): Promise<Lotr[]> {
  const response = await request.get(`${serverURL}/lotr`)
  return response.body
}
