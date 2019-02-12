import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

// functions
import { editQuestion } from '../../../util/APIUtils'

import QuestionFormContainer from './QuestionFormContainer'

class EditQuestion extends Component {
  constructor(props) {
    super(props)
  }

  editQuestion = async (question) => {
    // pass question with id
    const result = await editQuestion(question)
    // add error handling

  }


  getQuestion() {
    let question = null;
    if (this.props.location) {
      if (this.props.location.state) {
        question = this.props.location.state.questionObj
      }
      return question
    }
  }

  render() {
    console.log(this.props);
    const question = this.getQuestion()

    return (
      <QuestionFormContainer
        finalSubmit={this.editQuestion.bind(this)}>{
          (handleSubmit, cancel) => (
            <Fragment>
              <QuestionFormContainer.QuestionForm
                handleSubmit={handleSubmit}
                cancel={cancel}
                question={question.question} />
            </Fragment>
          )
        }</QuestionFormContainer>

    )
  }
}

export default withRouter(EditQuestion)