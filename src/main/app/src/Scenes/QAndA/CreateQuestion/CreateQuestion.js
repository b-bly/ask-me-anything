import React, { Component } from 'react'
// Style
import { Button, Form, Label, Input } from 'reactstrap';
import { StyledFormGroup, QuestionColumn, StyledButton, StyledRow } from './CreateQuestionStyle'

// functions
import { createQuestion } from '../../../util/APIUtils'
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
    const question = {
      questionText: this.state.questionText
    }
    const result = await createQuestion(question)
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
          <StyledRow>
            <StyledButton>Cancel</StyledButton>
            <Button type="submit">Submit</Button>
          </StyledRow>
        </QuestionColumn>

      </Form>
    )
  }
}

export default CreateQuestion