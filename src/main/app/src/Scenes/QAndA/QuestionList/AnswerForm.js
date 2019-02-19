import React from 'react'
// Components
import FormContainer from '../Form/FormContainer';
// Style
import {StyledAnswerCard} from './AnswerFormStyle'

const AnswerForm = (props) => {

  const createAnswer = (answer) => props.createAnswer(answer, props.questionId)

  return (

        <StyledAnswerCard>
          <FormContainer
          
          submit={createAnswer}
          {...props}
          />
        </StyledAnswerCard>
      
  )
}

export default AnswerForm