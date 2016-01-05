import React, { Component, PropTypes } from 'react'
import '../styles/global.css'
import { Link } from 'react-router'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }
  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <Link to="/"> home </Link>
        {this.props.children}
      </div>
    )
  }
}
