import React, { Component } from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';

class CreateNewPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			thumbnailUrl: '',
	      	imageUrl: '',
	      	timestamp: '',
    	};
	}

	handleSetUsername = (event) => {
    	this.setState({username: event.target.value});
    }

    handleSetThumbnailUrl = (event) => {
    	this.setState({thumbnailUrl: event.target.value});
    }

    handleSetImageUrl = (event) => {
    	this.setState({imageUrl: event.target.value});
    	console.log("imageUrl: ", this.state.imageUrl);
    }

    handleSetTimestamp = (event) => {
    	this.setState({timestamp: event.target.value});
    }

    submitNewPostForm = (event) => {
    	event.preventDefault();
    	this.props.dispatch(addPost(this.state));
    	this.setState({
    		username: '', 
    		thumbnailUrl: '',
    		imageUrl: '',
    		timestamp: ''
    	});
    }

	render() {
		return (
			<form onSubmit={this.submitNewPostForm}>
          		Username:
          		<input 
		            onChange={this.handleSetUsername} 
		            placeholder="username"
		            type="text"
		            value={this.state.username} 
          		/>
          		<br/>
				Thumbnail Url:
				<input
		            onChange={this.handleSetThumbnailUrl} 
		            placeholder="Thumbnail Url"
		            type="text" 
		            value={this.state.thumbnailUrl} 
          		/>
          		<br/>
        		Image Url:
		        <input
		            onChange={this.handleSetImageUrl} 
		            placeholder="Image Url"
		            type="text" 
		            value={this.state.imageUrl} 
          		/>	
          		<br/>
	        	Timestamp: 
		        <input    
		            onChange={this.handleSetTimestamp} 
		            placeholder="Timestamp"
		            type="text" 
		            value={this.state.timestamp} 
          		/>
				<br/>
				<button type="submit">Add New Post</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(CreateNewPost);