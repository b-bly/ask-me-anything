import React, { Component } from 'react'
import { Container } from './AnswerStyle'

class Answers extends Component {

  render() {

    return (
      <Container>
        {this.props.children()}
      </Container>
    )
  }
}

export default Answers