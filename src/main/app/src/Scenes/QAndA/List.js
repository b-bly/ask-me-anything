import React, { Component, Fragment } from 'react'


// Components
import Questions from './Questions'
import Question from './Question'

class List extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }


  render() {
    const questions = ['What?', 'When?', 'Where?', 'How?', 'Who?']
    return (
      <div>
        <Questions questions={questions}>

       {/* Any props that are passed to children in the Parent Questions component go in the
       () on the next line and then can be used as props in child Question or other 
       components */}
       
          {() => (
            questions.map((question, i) =>
              <Fragment key={i.toString()}>
                <Questions.Question question={question} />
              </Fragment>
            )
          )}

        </Questions>
        {/* show questions */}
      </div>
    )
  }
}

export default List