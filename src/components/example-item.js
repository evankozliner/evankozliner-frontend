import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

@Radium
export default class ExampleItem extends Component {
  render() {
    return (
      <div style={[
          styles.base
        ]}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  base: {
    padding: 10,
    border: '1px solid #ccc',
    marginBottom: 15
  }
}
