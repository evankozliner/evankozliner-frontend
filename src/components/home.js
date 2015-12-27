import React, { PropTypes, Component } from 'react'
import Radium from 'radium'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ExampleButton from './ExampleButton'
import * as ExampleActions from '../actions/example'

@connect(state => ({ example: state.example }))
export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    example: PropTypes.any
  }
  render() {
    let { dispatch } = this.props
    return (
      <div data-component="home">
        <h1>React Boilerplate</h1>
        <p>{this.props.example.toString()}</p>
        <ExampleButton {...bindActionCreators(ExampleActions, dispatch)} />
      </div>
    )
  }
}

