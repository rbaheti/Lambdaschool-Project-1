import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../actions';

import './CommentSection.css';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "rashmi",
		}
		this.input = null;
	}

	handleAddComment = (event) => {
		if(event.nativeEvent.keyCode === 13) { // 13 event.keyCode is for "enter" or "return" key
			const newComment = {
				username: this.state.username,
				text: this.input.value
			}
			this.props.dispatch(addComment(this.props.postid, newComment));
			this.input.value = "";
		}
	}

	render () {
		return (
			<div className="Comments">
				<div className="Comments-list">
					{this.props.comments.map((comment, index) => {
						return (
							<div className="Comment"  key={index}>
								<h3 className="Comment-username">
									<Link className="Comment-username-link" 
										to={`/userpost/${comment.username}`}> {comment.username} 
									</Link>
								</h3>
								<p className="Comment-body">{comment.text}</p>
							</div>
						);
					})}
				</div>

				<div className="Comments-timestamp">
					<Moment parse="MMMM DD YYYY, hh:mm:ss A" fromNow>{this.props.timestamp}</Moment>
				</div>

				<div className="Comments-add">
					<input className="Comments-addField" type="text" onKeyDown={this.handleAddComment}
						ref={(inputParam) => this.input = inputParam} placeholder="Add a comment...">
					</input>
				</div>
			</div>
		);
	}
};

export default connect()(CommentSection);