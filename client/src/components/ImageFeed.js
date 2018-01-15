import React, { Component } from 'react';
import './ImageFeed.css';
import { connect } from 'react-redux';
import { getPostData } from '../actions';
import SearchBar from './SearchBar.js';
import PostContainer from './PostContainer.js';
import { NavLink } from 'react-router-dom';

class ImageFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Hello from ImageFeed componentDidMount");
    if(this.props.allPosts.length === 0)
      this.props.getPostData();
  }

  getDisplayedPosts = () => {
    if (this.props.searchText === '') {
      return this.props.allPosts;
    } else {
      return this.props.allPosts.filter(
        post => post.username.includes(this.props.searchText)
      );
    }
  }

  handleNewPost = () => {
    this.props.history.push("/newpost");
  }

  render() {
    return (
      <div className="ImageFeed">
        <button onClick={this.handleNewPost}>New Post</button>
        <header>
          <h1 className="ImageFeed-title">instagram</h1>
          <SearchBar/>
        </header>
        <div className="Posts">
          {this.getDisplayedPosts().map((post, index) => {
            return (
              <div key={post.username}>
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
    allPosts: state.allPosts,
    searchText: state.searchText
  };
};

export default connect(mapStateToProps, {getPostData})(ImageFeed);