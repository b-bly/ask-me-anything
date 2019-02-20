import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

// components
import FormComponent from './FormComponent'

// props
// defaultValue, fieldName, labelText, placeholder

class CreateAnswer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitClicked: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async (payload) => {
    const result = await this.props.submit(payload, this)
    // add error handling
    if (result) {
      if (result.error) {
        console.log(result.error);
      }
    }

    if (this.props.successRedirectUrl) this.setState({
      redirectTo: this.props.successRedirectUrl
    })
  }

  cancel = (e) => {
    e.preventDefault()
    if (this.props.cancelRedirectUrl) this.setState({
      redirectTo: this.props.cancelRedirectUrl
    })
    if (typeof this.props.cancel === 'function') this.props.cancel()
  }

  getMode = () => {
    // set the form mode to add by default
    // if mode is set props define it as such
    if (this.props.mode) {
      return this.props.mode
    }
    return 'add'
  }

  render() {
    console.log('props');
    console.log(this.props)
    const submitRedirect = {
      pathname: '/'
    }
    const mode = this.getMode()

    if (this.state.submitClicked) {
      return <Redirect to={submitRedirect} />
    } else if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    } else {
      return (
        <Fragment>
          <FormComponent
            handleSubmit={this.handleSubmit.bind(this)}
            cancel={this.cancel.bind(this)}
            {...this.props}
            mode={mode} />
        </Fragment>
      )
    }
  }
}

export default withRouter(CreateAnswer)