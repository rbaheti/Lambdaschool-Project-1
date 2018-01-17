import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostContainer from './PostContainer.js';

class UserPostContainer extends Component {
	getPostForParamUsername = () => {
		// props.match.params is populated when Route path has ':' prefixed variable.
		// For example: path='/userpost/:username'
		return this.props.match.params.username;
	}

	getSingleUserPosts = () => {
    	return this.props.allPosts.filter(post => post.username.includes(this.props.match.params.username));
    };

	render() {
		return (
			<div className="ImageFeed">
				<p>Hello {this.getPostForParamUsername()}!</p>
				<div className="Posts">
		          	{this.getSingleUserPosts().map((post, index) => {
		            	return (
			              	<div key={post._id}>
			                	<PostContainer post={post} key={index} />
			            	</div>
            			);
          			})}
        		</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts
  };
};

export default connect(mapStateToProps)(UserPostContainer);