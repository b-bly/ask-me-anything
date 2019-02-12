import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

// functions
import { createQuestion } from '../../../util/APIUtils'

import QuestionFormContainer from './QuestionFormContainer'

class CreateQuestion extends Component {
  constructor(props) {
    super(props)
  }

  createQuestion = async (question) => {
    console.log(question);
    
    const result = await createQuestion(question)
    // add error handling
    if (result.error) {
      console.log(result.error);
      
    }
  }


  render() {
    console.log(this.props);

    return (
      <QuestionFormContainer
        finalSubmit={this.createQuestion.bind(this)}>{
          (handleSubmit, cancel) => (
            <Fragment>
              <QuestionFormContainer.QuestionForm
                handleSubmit={handleSubmit}
                cancel={cancel}
                question={''} />
            </Fragment>
          )
        }</QuestionFormContainer>

    )
  }
}

export default withRouter(CreateQuestion)