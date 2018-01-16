import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";

export default class CreateAccount extends Component {
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
        localStorage.setItem('uuID', data.data._id);
        this.setState({isError: false});
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