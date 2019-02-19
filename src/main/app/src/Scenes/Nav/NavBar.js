import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

// style
import { StyledNavItem, StyledLink, StyledNav, LeftSide, RightSide } from './NavStyle'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: true,
    };
  }


  render() {
    const loginActive = this.props.location.pathname.indexOf("login") !== -1
    const registerActive = this.props.location.pathname.indexOf("register") !== -1
    const homeActive = this.props.location.pathname === '/'

    return (
      <StyledNav pills >
        <LeftSide>
          {this.props.currentUser === null && (
            <Fragment>
              <StyledNavItem>
                <NavLink active={loginActive}
                  tag={Link}
                  to="/client/login">Login</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink active={registerActive}
                  tag={Link}
                  to="/register">Register</NavLink>
              </StyledNavItem>
            </Fragment>
          )}

          <StyledNavItem>
            <NavLink active={homeActive}
              tag={Link}
              to="/">Home</NavLink>
          </StyledNavItem>
        </LeftSide>

        <RightSide>
          {this.props.currentUser !== null && (
            <StyledNavItem>
              <StyledLink
                onClick={this.props.handleLogout}>Logout</StyledLink>
            </StyledNavItem>
          )}
        </RightSide>
      </StyledNav>
    )
  }
}

export default withRouter(NavBar)