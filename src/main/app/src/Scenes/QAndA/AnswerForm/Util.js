
export const getAnswerFormContainerDefaultProps = () => {
  return {
    fieldName: 'answerText',
    payload: {
      defaultValue: '',
    },
    labelText: 'Your answer:',
    placeholder: 'Type your answer',
    mode: 'add',
    margin: '0',
    maxWidth: 'auto'
  }
}


export const getEditAnswerFormContainerDefaultProps = () => {
  return {
    fieldName: 'answerText',
    payload: {
      defaultValue: '',
    },
    labelText: 'Your answer:',
    placeholder: 'Type your answer',
    mode: 'edit',
    margin: '0',
    maxWidth: 'auto'
  }
}