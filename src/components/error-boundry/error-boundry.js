import React, { Component } from 'react'
import './error-boundry.scss'

export default class ErrorBoundry extends Component {
  state = {
    hasErrors: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  render() {
    const { hasErrors } = this.state
    const error = <div> You catch error, sorry </div>

    return hasErrors ? error : this.props.children
  }
}
