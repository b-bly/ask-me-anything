import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

// Components
import Questions from './Questions'
import AnswerForm from './AnswerForm'
import { getQuestions, deleteQuestion, createAnswer } from '../../../util/APIUtils'

// Util
import {getAnswerFormContainerDefaultProps} from '../AnswerForm/Util'


class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resolvedError: false,
      resolvedSuccess: false,
      questions: '',
      error: '',
      message: '',
      showAnswerFormId: -1,
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
        console.log(data.error);

        this.setState({
          resolvedError: true,
          error: data.error.error
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
    const payload = {
      defaultValue: questionObj.questionText,
      id: questionObj.id
    }

    const redirectObj = {
      pathname: '/edit-question/?question_id=' + questionObj.id,
      state: {
        payload: payload
      }
    }
    this.setState({
      redirectTo: redirectObj
    })
  }

  deleteQuestion = async (questionId) => {
    const userPermission = window.confirm("Are you sure you want to delete this?")
    if (userPermission) {
      let data = {}
      try {
        data = await deleteQuestion(questionId)

        if (data.error) {

          this.setState({
            message: JSON.stringify(data.error)
          })
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
  }

  showAnswerForm = (questionId) => {
    this.setState({
      showAnswerFormId: questionId
    })
  }

  hideAnswerForm = () => {
    this.setState({
      showAnswerFormId: false
    })
  }

  createAnswer = async (answer, questionId) => {
    console.log(answer, questionId);
    const payload = {
      ...answer,
      questionId: questionId
    }
    const data = await createAnswer(payload)
  }

  render() {
    const questions = (
      <Questions questions={this.state.questions}>

        {/* Any props that are passed to children in the Parent Questions component go in the
 () on the next line and then can be used as props in child Question or other 
 components */}
        {() => (
          this.state.questions.map((question, i) => {
            const showAnswerFormBool = (this.state.showAnswerFormId === question.id)
            return (
              <Fragment key={i.toString()}>
                <Questions.Question question={question}
                  showAnswerForm={this.showAnswerForm}
                  editQuestion={this.editQuestion.bind(this)}
                  deleteQuestion={this.deleteQuestion.bind(this)}
                  showAnswerFormBool={showAnswerFormBool} />
                {showAnswerFormBool === true && (
                  <AnswerForm
                    questionId={question.id}
                    createAnswer={this.createAnswer.bind(this)}
                    cancel={this.hideAnswerForm.bind(this)}
                    {...getAnswerFormContainerDefaultProps()}
                  />
                )}
              </Fragment>
            )
          })
        )}
      </Questions>
    )
    // end questions def

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
            <p style={{ color: 'red' }}>{this.state.message}</p>
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