import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import './CommentSection.css';

class CommentSection extends Component {

	constructor(props) {
		super();

		this.state = {
			username: "rashmi",
			comments: []
		}
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments
		});
	}

	addComment = (event) => {
		if (event.keyCode === 13) {
			const newComment = {
				username: this.state.username,
				text: this.input.value
			}

			this.setState({
				comments: [...this.state.comments, newComment]
			})

			this.input.value = "";
		}
	}

	render () {
		const timestamp = this.props.timestamp;
		//console.log(this.props.comments);
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
					<Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>{this.props.timestamp}</Moment>
				</div>

				<div className="Comments-add">
					<input className="Comments-addField" type="text" onKeyDown={this.addComment}
						ref={input => this.input = input} placeholder="Add a comment...">
					</input>
				</div>
			</div>
		);
	}
};

export default CommentSection;