import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// Style
import { StyledButton, Container, StyledRow } from './QuestionsStyle'

//Components
import Question from './Question'
import AnswerForm from '../AnswerForm/AnswerForm'
import Answers from './Answers'
import Answer from './Answer'
import EditAnswerForm from '../AnswerForm/EditAnswerForm'

class Questions extends Component {

  static Question = Question
  static AnswerForm = AnswerForm
  static Answers = Answers
  static Answer = Answer
  static EditAnswerForm = EditAnswerForm

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