import React, { Component } from 'react'

// Style
import { Button, Form, Label, Input } from 'reactstrap';
import { StyledFormGroup, FlexColumn, StyledButton, StyledRow } from './FormStyle'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      [this.props.fieldName]: ''
    }
    if (this.props.payload) {
      this.state = {
        [this.props.fieldName]: this.props.payload.defaultValue ? this.props.payload.defaultValue : ''
      }
    }
  }

  handleChange = (event) => {
    console.log(this.state);
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state);
  }

  render() {
// props:
// fieldName, payload.defaultValue, payload.id, labelText, placeholder
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FlexColumn>
          <StyledFormGroup>
            <Label for={this.props.fieldName}>{this.props.labelText}</Label>
            <Input
              type="textarea"
              name={this.props.fieldName}
              placeholder={this.props.placeholder}
              value={this.state[this.props.fieldName]}
              onChange={this.handleChange.bind(this)}
            />
          </StyledFormGroup>
          <StyledRow>
            <StyledButton onClick={this.props.cancel}>Cancel</StyledButton>
            <Button type="submit">Submit</Button>
          </StyledRow>
        </FlexColumn>
      </Form>
    )
  }
}

export default FormComponent