import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

// Components
import Questions from './Questions'
import { getQuestions, deleteQuestion } from '../../../util/APIUtils'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resolvedError: false,
      resolvedSuccess: false,
      questions: '',
      error: '',
      message: '',
    };
  }

  componentDidMount() {
    this.getQuestionsCall()
  }

  getQuestionsCall = async () => {
    let data = []
    try {
      data = await getQuestions()
      if (data.error) {
        this.setState({
          resolvedError: true,
          error: data.error
        })
      } else {
        this.setState({
          resolvedSuccess: true,
          questions: data
        })
      }
    } catch (error) {
      this.setState({
        resolvedError: true,
        error: error
      })
    }
  }

  editQuestion = (questionObj) => {
    const redirectObj = {
      pathname: '/edit-question/?question_id=' + questionObj.id,
      state: {
        questionObj: questionObj
      }
    }
    this.setState({
      redirectTo: redirectObj
    })
  }

  deleteQuestion = async (questionId) => {
    let data = {}
    try {
      data = await deleteQuestion(questionId)
      
      if (data.error) {
        console.log(data.error);
        
        // this.setState({
        //   message: data.error
        // })
      } else {
        let updatedQuestions = this.state.questions.filter((question) => {
          if (question.id === questionId) return false
          return true
        })
        this.setState({
          message: 'Deleted successfully',
          questions: updatedQuestions
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const questions = <Questions questions={this.state.questions}>

      {/* Any props that are passed to children in the Parent Questions component go in the
 () on the next line and then can be used as props in child Question or other 
 components */}
      {() => (
        this.state.questions.map((question, i) =>
          <Fragment key={i.toString()}>
            <Questions.Question question={question}

              editQuestion={this.editQuestion.bind(this)}
              deleteQuestion={this.deleteQuestion.bind(this)} />
          </Fragment>
        )
      )}
    </Questions>

    if (this.state.redirectTo) {
      return (
        <Redirect to={this.state.redirectTo} />
      )
    } else if (this.state.resolvedError) {
      return <h1>{this.state.error}</h1>
    } else if (this.state.resolvedSuccess) {

      return (
        <Fragment>
          {this.state.message && (
            <p style={{color: 'red'}}>{this.state.message}</p>
          )}
          {questions}
        </Fragment>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default List