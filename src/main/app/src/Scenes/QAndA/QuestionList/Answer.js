import React from 'react'
import {StyledAnswerCard} from './AnswerStyle'

// Components
import { IconButton } from '../../../Components/IconButton'

// Style
import {
  CardText, CardBody
} from 'reactstrap';
import { StyledCardSubtitle, Row } from './QuestionStyle'
import { colors } from '../../../constants'

const Answer = (props) => {

  const showEditAnswerForm = () => {
    console.log('edit');
    console.log(props);
    
    props.showEditAnswerForm(props.answer.id)
  }

  const deleteAnswer = () => {
    props.deleteAnswer(props.answer.id)    
  }

  return (
    <StyledAnswerCard>
        <CardBody>
          <StyledCardSubtitle>
            Author: {props.answer.username}
          </StyledCardSubtitle>
          <CardText>
            Answer: {props.answer.answerText}
          </CardText>
          <Row>
            <IconButton
              icon="edit"
              color={colors.cyan}
              action={showEditAnswerForm}
            />
            <IconButton
              icon="trash"
              color={colors.red}
              action={deleteAnswer}
            />
          </Row>
        </CardBody>
    </StyledAnswerCard>
  )
}

export default Answer