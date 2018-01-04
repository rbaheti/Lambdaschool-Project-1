import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";

export default class CreateNewPost extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			thumbnailUrl: '',
	      	imageUrl: '',
	      	timestamp: ''
    	}
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

    submitForm = (event) => {
    	event.preventDefault();
    	const newPost = {
    		username: this.state.userName, 
    		thumbnailUrl: this.state.thumbnailUrl,
    		imageUrl: this.state.imageUrl,
    		timestamp: this.state.timestamp
    	};
    	axios.post('http://localhost:3030/newpost', newPost)
      		.then((data) => {
		        localStorage.setItem('uuID', data.data._id);
		        setTimeout(() => {
		          window.location = '/posts';
		        }); 
      		})
      		.catch((err) => {
        		console.log(err);
      		});
    }

	render() {
		return (
			<form>
				<FormGroup>
	          		Username:
	          		<FormControl 
			            id="formUsername"
			            className="form-control"
			            onChange={this.handleSetUsername} 
			            placeholder="username"
			            type="text" 
			            value={this.state.username} 
	          		/>
	        	</FormGroup>
				<FormGroup>
					Thumbnail Url:
	          		<FormControl 
			            id="formThumbnailUrl"
			            className="form-control"
			            onChange={this.handleSetThumbnailUrl} 
			            placeholder="Thumbnail Url"
			            type="text" 
			            value={this.state.thumbnailUrl} 
	          		/>
	        	</FormGroup>
	        	<FormGroup>
	        		Image Url:
	          		<FormControl 
			            id="formImageUrl"
			            className="form-control"
			            onChange={this.handleSetImageUrl} 
			            placeholder="Image Url"
			            type="text" 
			            value={this.state.imageUrl} 
	          		/>
	        	</FormGroup>
	        	<FormGroup>
	        		Timestamp:
	          		<FormControl 
			            id="formTimestamp"
			            className="form-control"
			            onChange={this.handleSetTimestamp} 
			            placeholder="Timestamp"
			            type="text" 
			            value={this.state.timestamp} 
	          		/>
	        	</FormGroup>

				<br/>
				<button className="btn btn-default" onClick={this.submitForm}>Submit</button>
			</form>
		)
	}
}