import React, { Component, PropTypes } from 'react'

export default class DynFlexItem extends Component {
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
