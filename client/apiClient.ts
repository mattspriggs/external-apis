import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import { Activity } from '../models/Activity.ts'

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
