import { createQuestion, editQuestionRequest } from '../../../util/APIUtils'

export const editQuestion = async (payload, scope) => {
  payload.id = scope.props.location.state.payload.id
  const result = await editQuestionRequest(payload)
  return result
}

export const getFormPropsContainerDefaultProps = () => {
  return {
    fieldName: 'questionText',
    payload: {
      defaultValue: '',
    },
    labelText: 'New question:',
    placeholder: 'Type your question',
    mode: 'add',
    submit: createQuestion,
    cancelRedirectUrl: '/',
    successRedirectUrl: '/'
  }
}

export const getEditQuestionDefaultProps = () => {
  return {
    fieldName: 'questionText',
    labelText: 'Edit your question',
    placeholder: 'Type your question',
    mode: 'edit',
    submit: editQuestion,
    cancelRedirectUrl: '/',
    successRedirectUrl: '/'
  }
}