//Style
import styled from 'styled-components'
import { Card, CardSubtitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const StyledCard = styled(Card)`
  margin: 5px 10px
  text-align: left
`

export const StyledCardSubtitle = styled(CardSubtitle)`
  font-size: .8rem;
  color: gray;
`

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
`

export const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  margin: 'auto .5em';
  margin: 0 .5em;
  cursor: pointer;
  font-size: .8rem;


&:hover, .btn:focus {
  text-decoration: none;
  opacity: .8;
}

&:focus, .btn.focus {
  outline: 0;
}
  `