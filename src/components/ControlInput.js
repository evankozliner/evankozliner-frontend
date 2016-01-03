import React, { Component, PropTypes } from 'react'

export default class ControlInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    changeHandler: PropTypes.func
  }
	constructor(props) {
		super(props)
		this.changeHandler = this.changeHandler.bind(this)
	}
	changeHandler(event) {
		this.props.changeHandler(this.refs.input.value)
	}
  render() {
    return (
      <input value={this.props.value} onChange={this.changeHandler} ref="input"/>
    )
  }
}
