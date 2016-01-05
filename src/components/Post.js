import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Post extends Component {
	static propType = {
		postInfo: PropTypes.object
	}
	render() {
		let url = "/post/" + this.props.postInfo.id
		let tags = []
		for (var i = 0; i < this.props.postInfo.tags.length; i++) {
			tags.push(<li>{this.props.postInfo.tags[i]}</li>)
		}
		return (
			<Link to= { url }>
				<li>
					<h3>{ this.props.postInfo.id }</h3>
					<ul>
						{ tags }
					</ul>
				</li>
			</Link>
		)
	}
}
