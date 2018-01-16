import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import ImageFeed from './ImageFeed.js';
import UserPostContainer from './UserPostContainer.js';
import CreateNewPost from './CreateNewPost';
import Login from './Login';
import CreateAccount from './CreateAccount';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={ImageFeed} />
        <Route exact={true} path='/userpost/:username' component={UserPostContainer}/>
        <Route exact={true} path='/newpost' component={CreateNewPost}/>
        <Route exact={true} path='/login' component={Login}/>
        <Route exact={true} path='/create-user' component={CreateAccount}/>
      </Switch>
    );
  }
}

export default App;