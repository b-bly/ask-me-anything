//Style
import styled from 'styled-components'
import { FormGroup, Button } from 'reactstrap'

export const StyledFormGroup = styled(FormGroup) `
  width: 100%;
`
export const QuestionColumn = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 600px;
`

export const QuestionContainer = styled.div `
  width: 100%
`

export const StyledButton = styled(Button) `
  align-self: flex-end;
  margin: 0 5px;
`
export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`