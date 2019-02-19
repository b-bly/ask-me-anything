
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
    maxWidth: 'auto',
  }
}