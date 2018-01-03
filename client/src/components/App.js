import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ImageFeed from './ImageFeed.js';
import CommentSection from './UserPostContainer';
import UserPostContainer from './UserPostContainer.js';
import CreateNewPost from './CreateNewPost';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={ImageFeed} />
        <Route exact={true} path='/userpost/:username' component={UserPostContainer}/>
        <Route exact={true} path='/newpost' component={CreateNewPost}/>
        <Route exact={true} path='/login' component={Login}/>
      </Switch>
    );
  }
}

export default App;