import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import FormContainer from './FormContainer';

class FormPropsContainer extends Component {

  cancel = () => {
    this.setState({
      redirectTo: '/'
    })
  }
  render() {
    // props:
// fieldName, defaultValue, labelText, placeholder, mode
    // const {fieldName, labelText, placeholder, payload: {defautValue}, mode } = this.props.location.state
    return (
      <FormContainer
      cancel={this.cancel.bind(this)}
      {...this.props}
      {...this.props.location.state}
      />
    )
  }
}

export default withRouter(FormPropsContainer)