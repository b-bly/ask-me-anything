import React from 'react'

// Style
import {
  CardText, CardBody
} from 'reactstrap';
import { StyledCard, StyledCardSubtitle, Row, Icon } from './QuestionStyle'

const IconButton = (props) => {
  const action = (e) => {
    e.preventDefault()
    props.action()
  }

  return (
    <Icon icon={props.icon}
    color={props.color}
    onClick={action}></Icon>
  )
}


const Question = (props) => {
  const editQuestion = () => {
    // redirect to /edit-question and pass question data
    props.editQuestion(props.question)
  }
  const deleteQuestion = () => {    
    props.deleteQuestion(props.question.questionId)
  }
  
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
            color="#868e96"
           
            action={editQuestion}
          /> 
           <IconButton 
            icon="trash"
            color="#868e96"
            action={deleteQuestion}
          /> 
        </Row>

      </CardBody>
    </StyledCard>
  )
}

export default Question