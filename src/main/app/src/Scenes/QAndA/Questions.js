import React, { Component } from 'react'
//Components
import Question from './Question'

const container = {
  display: 'flex',
  flexDirection: 'column'
}

class Questions extends Component {
  constructor() {
    super()
  }
  static Question = Question

  render() {
    return (
      <div style={container}>
        {this.props.children()}
      </div>
    )
  }
}

export default Questions