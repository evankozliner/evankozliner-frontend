import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Test extends Component {
  render() {
    return (
      <div data-component="test">
        <Link to="/">Home</Link>
      </div>
    )
  }
}
