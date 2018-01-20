import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import "./Login.css";
import { connect } from 'react-redux';
import { updateUsername } from '../actions';

class CreateAccount extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      isError: false,
    }
    this.handleSetUsername = this.handleSetUsername.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  handleSetUsername(e) {
    this.setState({username: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  createUser(e) {
    e.preventDefault();
    const userToSave = {username: this.state.username, password: this.state.password};
    axios.post('http://localhost:3030/newuser', userToSave)
      .then((data) => {
        localStorage.setItem('localStorage-username', this.state.username);
        this.setState({isError: false});
        this.props.dispatch(updateUsername(this.state.username));
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({isError: true});
        console.log("got err: " + err);
      });
  }
  render() {
    return (
      <form className="Login-form">
        <FormGroup className="Login-group" controlId="formHorizontalEmail">
            Username
            <FormControl 
              id="formHorizontalEmail"
              className="form-control"
              onChange={this.handleSetUsername} 
              placeholder="Username"
              type="text" 
              value={this.state.username} 
            />
          </FormGroup>
          
          <FormGroup className="Login-group" controlId="formHorizontalPassword">
            Password
            <FormControl 
              id="formHorizontalPassword"
              className="form-control"
              onChange={this.handleSetPassword} 
              placeholder="password"
              type="password" 
              value={this.state.password} 
            />
          <br/>
          {
            this.state.isError === true ?
            (<div> Username already exists. Please try another username.</div>) : null
          }
          <button className="btn btn-default" onClick={this.createUser}>Create Account</button>
        </FormGroup>
      </form>
    )
  }
}

export default connect()(CreateAccount);