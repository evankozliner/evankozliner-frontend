import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ExampleButton from './ExampleButton'
import * as ExampleActions from '../actions/example'
import { inputAction } from '../actions/control-input'
import { Link } from 'react-router'
import ControlInput from './ControlInput'
import data from '../sampleData'
import PostList from './PostList'

// anonymous function that returns the example string from the global state
@connect(state => ({ example: state.example, value: state.controlInput }))
export default class Home extends Component {
  // Explicit prop types
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    example: PropTypes.any,
    value: PropTypes.string
  }
	constructor(props) {
		super(props)
		this.changeHandler = this.changeHandler.bind(this)
	}
	changeHandler(value) {
		this.props.dispatch(inputAction(value))
	}
  render() {
    let { dispatch } = this.props
    return (
      <div data-component="home">
        <p>{this.props.example.toString()}</p>
        <ExampleButton {...bindActionCreators(ExampleActions, dispatch)} />
        <Link to="/test"> test </Link>
        <ControlInput value={this.props.value} changeHandler={this.changeHandler}/>
				<p>{this.props.value}</p>
        <PostList postData={data} />
      </div>
    )
  }
}
