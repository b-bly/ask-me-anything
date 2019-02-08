List documentation

This is a new way of organizing wrapper components I found at 
https://itnext.io/using-advanced-design-patterns-to-create-flexible-and-reusable-react-components-part-3-render-d7517dfe72bc



How props are passed to props.children

class List extends Component {
...

  render() {
    const questions = ['What?', 'When?', 'Where?', 'How?', 'Who?']
    return (
      <div>
        <Questions questions={questions}>

       {/* Any props that are passed to children in the Parent Questions component go in the
       () on the next line and then can be used as props in child Question or other 
       components */}
       
          {(example) => (
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

class Questions extends Component {

  // implemented as Questions.Question in List.js
  static Question = Question

  render() {
    const example = 'Hello'
    return (
      <div>
      {/* now example is available in List component */}
        {this.props.children(example)}
      </div>
    )
  }
}

export default Questions