import React, { Component, PropTypes } from 'react'

export default class DynGridRow extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div className="dyn-grid-row">
        {this.props.children}
      </div>
    )
  }
}
