import { Nav, NavLink, NavItem } from 'reactstrap'
import styled from 'styled-components'

export const StyledNav = styled(Nav) `
  width: 100%;
`

export const StyledLink = styled(NavLink) `
  cursor: pointer;
`
export const LeftNavItem = styled(NavItem) `
  justify-self: flex-end;
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