import React, { Component } from 'react';
import { signup } from './util/APIUtils';
import './Login.css'

import { Button, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const formStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
}

const formButtonStyle = {

}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      name: '',
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
    const signupRequest = { ...this.state }
    
    signup(signupRequest)
      .then(response => {
        // redirects to login
        this.props.history.push("/login");
      }).catch(error => {
        console.log(error);

      });

  }

  render() {
    return (
      <div className="container">
        <Card className="card-login">
          <p>Sign up:</p>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <FormGroup >
              <Label>
                Username:
              </Label>
              <Input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
            </FormGroup>

            <FormGroup >
              <Label>
                Name:
              </Label>
              <Input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
            </FormGroup>

            <FormGroup >
              <Label>
                Email:
              </Label>
              <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
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

export default Register;