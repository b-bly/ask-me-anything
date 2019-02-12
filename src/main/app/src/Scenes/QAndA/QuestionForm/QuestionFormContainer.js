import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

// components
import QuestionForm from './QuestionForm'

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
    // const mode = this.props.location.pathname.search(/edit/) === -1 ? 'add' : 'edit';
    // add question id and username if edit

    this.props.finalSubmit(question)
  }

  cancel = (e) => {
    e.preventDefault()
    this.setState({
      redirectTo: '/'
    })
  }



  static QuestionForm = QuestionForm

  render() {
    const { handleSubmit, cancel } = this

    console.log('props');
    console.log(this.props)
    const questionListRedirectObj = {
      pathname: '/'
    }
    // console.log('this.props', this.props)

    // To do: add error handling
    if (this.state.submitClicked) {
      return <Redirect to={questionListRedirectObj} />
    } else if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    } else {
      return (
        <Fragment>
          {this.props.children(handleSubmit, cancel)}

        </Fragment>
      )
    }
  }
}

export default withRouter(CreateQuestion)