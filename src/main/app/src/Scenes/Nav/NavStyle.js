import { Nav, NavLink, NavItem } from 'reactstrap'
import styled from 'styled-components'

export const StyledNav = styled(Nav) `
  width: 100%;
  background-color: white;
`

export const StyledLink = styled(NavLink) `
  cursor: pointer;
`
export const StyledNavItem = styled(NavItem) `
  margin:5px;
`

export const LeftNavItem = styled(StyledNavItem) `
  justify-self: flex-end;
  margin:5px;
`

export const LeftSide = styled.div `
  margin-right: auto;
  display: flex;
  align-items: center;
`

export const RightSide = styled.div `
  margin-left: auto;
  display: flex;
  align-items: center;
`

