import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import FormContainer from './FormContainer';

// Use this container only for passing data from this.props.location.state
// Otherwise just use FormContainer directly
class FormPropsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    
    // props:
// fieldName, defaultValue, labelText, placeholder, mode
    // const {fieldName, labelText, placeholder, payload: {defautValue}, mode } = this.props.location.state
    return (
      <FormContainer
      {...this.props}
      {...this.props.location.state}
      />
    )
  }
}

export default withRouter(FormPropsContainer)