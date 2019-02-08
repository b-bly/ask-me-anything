import React, { Component } from 'react';
import { login } from '../../util/APIUtils';
import './Login.css'
import { ACCESS_TOKEN } from '../../constants'

import { Button, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const formStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
}

const formButtonStyle = {
  
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginRequest = {
      usernameOrEmail: this.state.usernameOrEmail,
      password: this.state.password,
    }
    login(loginRequest)
      .then(response => {
        // store auth token
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);

        // redirects home
        this.props.onLogin();
      }).catch(error => {
        console.log(error);

      });

  }

  render() {
    return (
      <div className="container">
        <Card className="card-login">
        <p>Login:</p>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <FormGroup >
              <Label>
                Username:
          </Label>
              <Input type="text" value={this.state.usernameOrEmail} onChange={this.handleChange} name="usernameOrEmail" />
            </FormGroup>
            <FormGroup >
              <Label>
                Password:
          </Label>
              <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
            </FormGroup>
            <FormGroup>
              <Input type="submit" className="btn-outline-success" value="Submit" />
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;