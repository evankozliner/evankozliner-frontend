import React, { Component, PropTypes } from 'react'

export default class DynGridColumn extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div className="dyn-grid-column">
        {this.props.children}
      </div>
    )
  }
}
