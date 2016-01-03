import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Post extends Component {
	static propType = {
		postInfo: PropTypes.object
	}
	render() {
		let url = "/post/" + this.props.postInfo.id
		return (
			<Link to= { url }>
				<li>{this.props.postInfo.id}</li>
			</Link>
		)
	}
}
