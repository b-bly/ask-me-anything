import React, { Component } from 'react'

// Style
import { Button, Form, Label, Input } from 'reactstrap';
import { StyledFormGroup, QuestionColumn, StyledButton, StyledRow } from './QuestionFormStyle'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionText: this.props.questionText ? this.props.questionText : ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state);
  }

  render() {
    const questionText = this.props.questionText
    console.log(this.props);

    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <QuestionColumn>
          <StyledFormGroup>
            <Label for="questionText">Post a question</Label>
            <Input
              type="textarea"
              name="questionText"
              placeholder="Type your question..."
              value={this.state.questionText}
              onChange={this.handleChange.bind(this)}
            />
          </StyledFormGroup>
          <StyledRow>
            <StyledButton onClick={this.props.cancel}>Cancel</StyledButton>
            <Button type="submit">Submit</Button>
          </StyledRow>
        </QuestionColumn>
      </Form>
    )
  }
}

export default QuestionForm