//Style
import styled from 'styled-components'
import { Card } from 'reactstrap'

export const StyledCard = styled(Card)`
  margin: 5px 10px;
  text-align: left;
  width: 90%;
`
export const StyledAnswerCard = styled(StyledCard)`
  margin: 5px 100px;
  width: calc(90% - 90px);
`