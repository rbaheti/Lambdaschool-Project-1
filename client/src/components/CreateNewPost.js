import React, { Component } from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
let dateFormat = require('dateformat');

class CreateNewPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {
				username: this.props.username,
				thumbnailUrl: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/932e4d9af891.png',
	      		imageUrl: '',
	      	},
	      	redirectToHomePage: false,
    	};
	}

    handleSetImageUrl = (event) => {
    	let newPost = {...this.state.post};
		newPost.imageUrl = event.target.value;
		this.setState({post:newPost});
    }

    submitNewPostForm = (event) => {
    	event.preventDefault();
    	let newPost = {...this.state.post};
		let now = new Date();
		console.log("dateFormat(now, 'isoDateTime'): ", dateFormat(now, "isoDateTime"));
		newPost.timestamp = dateFormat(now, "isoDateTime");
		this.props.dispatch(addPost(newPost));
    	this.setState({
			post: {
    			username: this.props.username, 
    			thumbnailUrl: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/932e4d9af891.png',
    			imageUrl: '',
    		},
    		redirectToHomePage: true,
    	});
    }

	render() {
		if (this.state.redirectToHomePage) {
     		return (<Redirect to="/"/>);
   		}
		return (
			<form onSubmit={this.submitNewPostForm}>
          		
        		Image Url:
		        <input
		            onChange={this.handleSetImageUrl} 
		            placeholder="Image Url"
		            type="text" 
		            value={this.state.post.imageUrl} 
          		/>	
          		<br/>
				<button type="submit">Add New Post</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(CreateNewPost);