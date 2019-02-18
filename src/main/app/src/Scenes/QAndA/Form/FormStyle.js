//Style
import styled from 'styled-components'
import { FormGroup, Button } from 'reactstrap'

export const StyledFormGroup = styled(FormGroup) `
  width: 100%;
`

// margin should be specified for the form used in adding an answer to a question
// for the add/edit question page, the form max width is set to 600.  
// for the answer add/edit, it is set to max-content
export const FlexColumn = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.margin ? props.margin : "auto"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "600px"};
  padding: 1.25rem;
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