import React, { Component } from 'react';
import './ImageFeed.css';
import { connect } from 'react-redux';
import { getPostData, updateUsername } from '../actions';
import SearchBar from './SearchBar.js';
import PostContainer from './PostContainer.js';

class ImageFeed extends Component {

  componentDidMount() {
    let username = localStorage.getItem('localStorage-username');
    if (username !== null) {
      this.props.updateUsername(username);
    }
    if(this.props.allPosts.length === 0) {
      this.props.getPostData();
    }
  }

  getDisplayedPosts = () => {
    if (this.props.searchText !== '') {
      return this.props.allPosts.filter(
        post => post.username.toLowerCase().includes(this.props.searchText.toLowerCase())
      );
    } else if (this.props.match.params.username !== undefined) {
      // props.match.params is populated when Route path has ':' prefixed variable.
      // For example: path='/userpost/:username'
      return this.props.allPosts.filter(
        post => (post.username === this.props.match.params.username)
      );
    } else {
      return this.props.allPosts;
    }
  }

  handleNewPost = () => {
    this.props.history.push("/newpost");
  }

  render() {
    return (
      <div className="ImageFeed">
        Welcome {this.props.username}!
        <button onClick={this.handleNewPost}>New Post</button>
        <header>
          <h1 className="ImageFeed-title">instagram</h1>
          <SearchBar/>
        </header>
        <div className="Posts">
          {this.getDisplayedPosts().map((post, index) => {
            return (
              <div key={post._id}>
                <PostContainer post={post} />
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
    allPosts: state.allPosts,
    searchText: state.searchText,
    username: state.username
  };
};

export default connect(mapStateToProps, {getPostData, updateUsername})(ImageFeed);