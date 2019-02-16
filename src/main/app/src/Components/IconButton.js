import React from 'react'

//Style
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
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

export const IconButton = (props) => {
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