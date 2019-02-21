import React, { Component } from 'react'
import { Container } from './QuestionsStyle'

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