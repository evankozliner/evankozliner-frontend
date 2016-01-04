import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import postData from '../postSampleData'
import marked from 'marked'

export default class Single extends Component {
	static propType = {
	}
	rawMarkup() {
		let md = postData.text
		return {__html: marked('# I am using __markdown__.')}
	}
	render() {
		return (
			<div dangerouslySetInnerHTML= {this.rawMarkup()} />
		)
	}
}
