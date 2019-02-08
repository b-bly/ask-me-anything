import React, { Fragment } from 'react'

// Style
import {
  CardText, CardBody,
  CardSubtitle, Button
} from 'reactstrap';
import { StyledCard, StyledCardSubtitle } from './QuestionStyle'

const Question = (props) => {

  return (
    <StyledCard>
      <CardBody>
        <StyledCardSubtitle>
          Author: jack
        </StyledCardSubtitle>
        <CardText>
          Question: {props.question}
        </CardText>
      </CardBody>
    </StyledCard>
  )
}

export default Question