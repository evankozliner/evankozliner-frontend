import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
export default class DynWrapper extends Component {
  static propTypes = {
    children: PropTypes.any,
    maxWidthStyle: PropTypes.object
  }
  render() {
    return (
      <div className="dyn-wrapper" style={[
          styles.base,
          this.props.maxWidthStyle && this.props.maxWidthStyle
        ]}>
        {this.props.children}
      </div>
    )
  }
}

let styles = {
  base: {
    margin: '0 auto'
  }
}
