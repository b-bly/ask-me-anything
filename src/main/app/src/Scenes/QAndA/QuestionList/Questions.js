import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// Style
import { StyledButton, Container, StyledRow } from './QuestionsStyle'

//Components
import Question from './Question'
import AnswerForm from './AnswerForm'

class Questions extends Component {

  static Question = Question
  static AnswerForm = AnswerForm

  render() {
    return (
      <Container>
        <StyledRow>
          <StyledButton
            tag={Link}
            to="/new-question"
            color="primary">New Question
          </StyledButton>
        </StyledRow>
        <Fragment>
          {this.props.children()}
        </Fragment>
      </Container>
    )
  }
}

export default Questions