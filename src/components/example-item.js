import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

@Radium
export default class ExampleItem extends Component {
  static propTypes = {
    children: PropTypes.any,
    green: PropTypes.bool,
    red: PropTypes.bool,
    purple: PropTypes.bool
  }
  render() {
    return (
      <div style={[
          styles.base,
          this.props.green && styles.green,
          this.props.red && styles.red,
          this.props.purple && styles.purple
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    padding: 5
  },
  green: {
    backgroundColor: '#21CAAD'
  },
  red: {
    backgroundColor: '#FD0051'
  },
  purple: {
    backgroundColor: '#5C6BC0'
  }
}
