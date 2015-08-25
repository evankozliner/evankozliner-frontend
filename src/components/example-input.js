import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { DynControlledInput as Input } from './'

@connect(state => ({ exampleInputValue: state.exampleInputValue }))
@Radium
export default class ExampleInput extends Component {
  static propTypes = {
    exampleInputChange: PropTypes.func,
    exampleInputValue: PropTypes.string
  }
  handleInputChange(e) {
    this.props.exampleInputChange(e.target.value)
  }
  render() {
    return (
      <div style={styles.base}>
        <p>{this.props.exampleInputValue}</p>
        <Input type="text"
               value={this.props.exampleInputValue}
               placeholder="Controlled Input"
               inputCallback={this.handleInputChange.bind(this)}
               style={styles.input}
               styleHover={styles.hover}
               styleFocus={styles.focus} />
      </div>
    )
  }
}

const styles = {
  input: {
    transition: '300ms',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '1px solid #ccc'
  },
  hover: {
    backgroundColor: '#ccc'
  },
  focus: {
    backgroundColor: '#aaa'
  }
}
