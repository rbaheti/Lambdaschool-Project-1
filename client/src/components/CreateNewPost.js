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
				username: '',
				thumbnailUrl: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/932e4d9af891.png',
	      		imageUrl: '',
	      	},
	      	redirectToHomePage: false,
    	};
	}

	handleSetUsername = (event) => {
		let newPost = {...this.state.post};
		newPost.username = event.target.value;
		this.setState({post:newPost});
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
    			username: '', 
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
          		Username:
          		<input 
		            onChange={this.handleSetUsername} 
		            placeholder="username"
		            type="text"
		            value={this.state.post.username} 
          		/>
          		<br/>
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

export default connect()(CreateNewPost);