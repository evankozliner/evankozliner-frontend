import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

@Radium
export default class ExampleItem extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div style={[
          styles.base
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    padding: 10,
    border: '1px solid #ccc',
    marginBottom: 15
  }
}
