import React, { Component } from 'react'
// Style
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { StyledFormGroup, QuestionColumn, StyledButton } from './CreateQuestionStyle'

// constants 
import { API_BASE_URL, ACCESS_TOKEN } from '../../../constants'

class CreateQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    // post to api
    let options = {
      url: API_BASE_URL + "/question",
      method: 'POST',
      body: JSON.stringify(this.state)
    }

    const headers = new Headers({
      'Content-Type': 'application/json',
    })

    // add token
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    try {
      const response = await fetch(options.url, options)
        .then(response =>
          response.json().then(json => {
            return json;
          })
        );
    } catch (error) {
      console.log(error);

    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <QuestionColumn>

          <StyledFormGroup>
            <Label for="questionText">Post a question</Label>
            <Input
              type="textarea"
              name="questionText"
              placeholder="Type your question..."
              onChange={this.handleChange.bind(this)}
            />
          </StyledFormGroup>

          <StyledButton>Submit</StyledButton>
        </QuestionColumn>

      </Form>
    )
  }
}

export default CreateQuestion