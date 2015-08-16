import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

@Radium
export default class ExampleButton extends Component {
  static propTypes = {
    exampleAction: PropTypes.func.isRequired
  }
  render() {
    let { exampleAction } = this.props
    return (
      <button onClick={exampleAction} style={[
          styles.base
        ]}>example</button>
    )
  }
}

const styles = {
  base: {
    width: '100%',
    backgroundColor: '#5C6BC0',
    border: 'none',
    color: 'white',
    padding: 10,
    fontSize: 16,
    transition: '300ms',
    margin: '15px auto',
    display: 'block',

    ':hover': {
      width: '90%',
      padding: 15,
      backgroundColor: '#7986CB',
      boxShadow: '0 0 3px rgba(0,0,0,0.5)'
    }
  }
}
