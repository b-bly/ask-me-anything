import React from 'react'
// Components
import FormContainer from '../Form/FormContainer';
// Style
import { StyledAnswerCard } from './AnswerFormStyle'

const AnswerForm = (props) => {

  const editAnswer = (answer) => {
    answer.id = props.answer.id
    props.editAnswer(answer)
  } 

  return (

    <StyledAnswerCard>
      <FormContainer
        submit={editAnswer}
        {...props}
      />
    </StyledAnswerCard>

  )
}

export default AnswerForm