import React, { Fragment } from 'react'

//Components
import { IconButton } from '../../../Components/IconButton'

// Style
import {
  CardText, CardBody
} from 'reactstrap';
import { StyledCard, StyledCardSubtitle, Row, Icon } from './QuestionStyle'
import { colors } from '../../../constants'
import FormContainer from '../Form/FormContainer';
import { createAnswer } from '../../../util/APIUtils'

const getAnswerFormContainerDefaultProps = () => {
  return {
    fieldName: 'answerText',
    payload: {
      defaultValue: '',
    },
    labelText: 'Your answer:',
    placeholder: 'Type your answer',
    mode: 'add',
    submit: createAnswer
  }
}

const Question = (props) => {
  const editQuestion = () => {
    // redirect to /edit-question and pass question data
    props.editQuestion(props.question)
  }
  const deleteQuestion = () => {
    props.deleteQuestion(props.question.id)
  }
  const createAnswer = () => {
    props.createAnswer(props.question.id)
  }

  return (
    <Fragment>
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
              action={createAnswer}
            />
          </Row>
        </CardBody>
        {/* Answer form */}
      </StyledCard>
      <StyledCard>
        <FormContainer
          {...getAnswerFormContainerDefaultProps()}
        />
      </StyledCard>
    </Fragment>
  )
}

export default Question