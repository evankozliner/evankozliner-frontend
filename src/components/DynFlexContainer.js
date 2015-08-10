import React, { Component, PropTypes } from 'react'

export default class DynFlexContainer extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
