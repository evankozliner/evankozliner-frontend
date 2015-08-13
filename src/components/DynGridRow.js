import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
export default class DynGridRow extends Component {
  static propTypes = {
    children: PropTypes.any,
    collapse: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
  }
  render() {
    return (
      <div className="dyn-grid-row" style={[
          styles.base,
          this.props.collapse && styles[this.props.collapse]
        ]}>
        {this.props.children}
      </div>
    )
  }
}

let styles = {
  base: {
    position: 'relative',
    ':before': {
      content: ' ',
      display: 'table'
    },
    ':after': {
      content: ' ',
      display: 'table',
      clear: 'both'
    }
  }
}
