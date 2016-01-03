import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import postData from '../postSampleData'

export default class Single extends Component {
	static propType = {
	}
	render() {
		return (
      <p>{postData.text}</p>
		)
	}
}
