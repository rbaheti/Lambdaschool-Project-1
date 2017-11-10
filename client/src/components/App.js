import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPostData } from '../actions';
import axios from 'axios';

import SearchBar from './SearchBar.js';
import PostContainer from './PostContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPostData();
  }

  getDisplayedPosts() {
    if (this.props.searchText === '') {
      return this.props.allPosts;
    } else {
      return this.props.allPosts.filter(post => post.username.includes(this.props.searchText));
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">instagram</h1>
          <SearchBar/>
        </header>
        <div className="Posts">
          {this.getDisplayedPosts().map((post, index) => {
            return (
              <PostContainer post={post} key={index} />
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

export default connect(mapStateToProps, {getPostData})(App);