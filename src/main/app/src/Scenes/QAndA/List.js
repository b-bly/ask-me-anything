import React, { Component, Fragment } from 'react'

// Components
import Questions from './Questions'
import { getQuestions } from './../../util/APIUtils'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: null
    }
  }

  componentDidMount() {
    this.getQuestionsCall()
  }

  getQuestionsCall = async () => {
    const questions = await getQuestions()
    console.log(questions);
    
    this.setState({
      questions: questions
    })
  }

  render() {

    return (
      <div>
        {this.state.questions !== null && (
        <Questions questions={this.state.questions}>
          
       {/* Any props that are passed to children in the Parent Questions component go in the
       () on the next line and then can be used as props in child Question or other 
       components */}
       
          {() => (
            this.state.questions.map((question, i) =>
              <Fragment key={i.toString()}>
                <Questions.Question question={question.question} 
                  username={question.username}/>
              </Fragment>
            )
          )}

        </Questions>
        )}
        {/* show questions */}
      </div>
    )
  }
}

export default List