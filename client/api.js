import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function exampleGet () {
  return request
    .get(`${serverURL}/example`)
    .then(response => response.body)
}
// ***   ***   ***
