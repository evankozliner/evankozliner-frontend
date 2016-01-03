import React, { PropTypes, Component } from 'react'
import Post from './Post'

export default class PostList extends Component {
	static propTypes = {
		postData: PropTypes.object
	}
	createItem(item) {
		return <Post key={item.id} postInfo={item} />
	}
	render() {
		return (
			<ul>{this.props.postData.posts.map(this.createItem)}</ul>
		)
	}
}
