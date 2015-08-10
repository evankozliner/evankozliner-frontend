import React, { PropTypes, Component } from 'react'

export default class ExampleButton extends Component {
  static propTypes = {
    exampleAction: PropTypes.func.isRequired
  }
  render() {
    let { exampleAction } = this.props
    return (
      <button onClick={exampleAction}>example</button>
    )
  }
}
