import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPostContainer extends Component {
	constructor(props) {
		super(props);
	}

	getPostForParamUsername() {
		return this.props.match.params.username;
	}

	render() {
		return (
			<div>
				<p>Hello {this.getPostForParamUsername()}</p>
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