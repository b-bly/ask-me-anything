import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

// style
import { StyledLink, StyledNav, LeftNavItem, LeftSide, RightSide } from './NavStyle'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: true,
    };
  }


  render() {
    console.log(this.props);
    const loginActive = this.props.location.pathname.indexOf("login") !== -1
    const registerActive = this.props.location.pathname.indexOf("register") !== -1
    const homeActive = this.props.location.pathname === '/'
    console.log(loginActive, registerActive, homeActive);


    return (
      <StyledNav pills >
        <LeftSide>
          {this.props.currentUser === null && (
            <Fragment>
              <NavItem>
                <NavLink active={loginActive}
                  tag={Link}
                  to="/client/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={registerActive}
                  tag={Link}
                  to="/register">Register</NavLink>
              </NavItem>
            </Fragment>
          )}

          <NavItem>
            <NavLink active={homeActive}
              tag={Link}
              to="/">Home</NavLink>
          </NavItem>
        </LeftSide>

        <RightSide>
          {this.props.currentUser !== null && (
            <LeftNavItem>
              <StyledLink
                onClick={this.props.handleLogout}>Logout</StyledLink>
            </LeftNavItem>
          )}
        </RightSide>
      </StyledNav>
    )
  }
}

export default withRouter(NavBar)