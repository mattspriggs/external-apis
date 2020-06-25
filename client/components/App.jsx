import React from 'react'

import { getWelcome } from '../api'

class App extends React.Component {
  state = {
    welcomeStatement: ''
  }
  componentDidMount () {
    getWelcome()
      .then(res => this.setState({ welcomeStatement: res.statement }))
  }
  render () {
    return (
      <h1>{this.state.welcomeStatement}</h1>
    )
  }
}

export default App
