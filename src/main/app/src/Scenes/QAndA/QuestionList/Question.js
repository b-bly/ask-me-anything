import React from 'react'

//Components
import { IconButton } from '../../../Components/IconButton'

// Style
import {
  CardText, CardBody
} from 'reactstrap';
import { StyledCard, StyledCardSubtitle, Row } from './QuestionStyle'
import { colors } from '../../../constants'

const Question = (props) => {
  const editQuestion = () => {
    // redirect to /edit-question and pass question data
    props.editQuestion(props.question)
  }

  const deleteQuestion = () => {
    props.deleteQuestion(props.question.id)
  }

  const showAnswerForm = () => props.showAnswerForm(props.question.id)


  return (
      <StyledCard>
        <CardBody>
          <StyledCardSubtitle>
            Author: {props.question.username}
          </StyledCardSubtitle>
          <CardText>
            Question: {props.question.questionText}
          </CardText>
          <Row>
            <IconButton
              icon="edit"
              color={colors.cyan}
              action={editQuestion}
            />
            <IconButton
              icon="trash"
              color={colors.red}
              action={deleteQuestion}
            />
            <IconButton
              icon="reply"
              color={colors.gray600}
              action={showAnswerForm}
            />
          </Row>
        </CardBody>
      </StyledCard>
  )
}

export default Question