import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

// components
import QuestionForm from './QuestionForm'

// functions
import { createQuestion, editQuestion } from '../../../util/APIUtils'

class CreateQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitClicked: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async (question) => {
    let updatedQuestion = {}
    const mode = this.props.location.pathname.search(/edit/) === -1 ? 'add' : 'edit';
    // add question id and username if edit

    let result
    if (mode === 'add') {
      result = await createQuestion(question)
    } else {
      updatedQuestion.id = this.props.location.state.questionObj.id
      updatedQuestion.questionText = question.questionText
      result = await editQuestion(updatedQuestion)
    }
    // add error handling
    if (result.error) {
      console.log(result.error);
    }

    this.setState({
      redirectTo: '/'
    })
  }

  cancel = (e) => {
    e.preventDefault()
    this.setState({
      redirectTo: '/'
    })
  }


  getQuestion = () => {
    // for editing a question, return the question text.
    // Otherwise return an empty string (for the add question page)
    // This will be the default value for the form in QuestionForm
    let question = '';
    if (this.props.location) {
      if (this.props.location.state) {
        question = this.props.location.state.questionObj
      }
      return question.questionText
    }
    return ''
  }

  render() {
    console.log('props');
    console.log(this.props)
    const questionListRedirectObj = {
      pathname: '/'
    }
    const questionText = this.getQuestion()
    // console.log('this.props', this.props)

    // To do: add error handling
    if (this.state.submitClicked) {
      return <Redirect to={questionListRedirectObj} />
    } else if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    } else {
      return (
        <Fragment>
          <QuestionForm
            handleSubmit={this.handleSubmit.bind(this)}
            cancel={this.cancel.bind(this)}
            questionText={questionText} />
        </Fragment>
      )
    }
  }
}

export default withRouter(CreateQuestion)