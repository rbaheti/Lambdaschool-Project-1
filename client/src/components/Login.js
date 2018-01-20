import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUsername } from '../actions';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isError: false,
    }
    this.handleSetUsername = this.handleSetUsername.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.loginWithUser = this.loginWithUser.bind(this);
  }
  handleSetUsername(e) {
    this.setState({username: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  loginWithUser(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password};
    axios.post('http://localhost:3030/login', user)
      .then((data) => {
        localStorage.setItem('localStorage-username', this.state.username);
        this.setState({isError: false});
        this.props.dispatch(updateUsername(this.state.username));
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({isError: true});
      });
  }

  render() {
    return (
      <form className="Login-form">
        <FormGroup className="Login-group" controlId="formHorizontalEmail">
          User Name
          <FormControl 
            id="formHorizontalEmail"
            className="form-control"
            onChange={this.handleSetUsername} 
            placeholder="User Name"
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
          <Link to="/create-user">Don't have an account? Sign up here.</Link>
          <br />
          {
            this.state.isError === true ?
            (<div> Username or Password incorrect. Please try again.</div>) : null
          }
          <button className="btn btn-default" onClick={this.loginWithUser}>Login</button>
        </FormGroup>
      </form>
    )
  }
}

export default connect()(Login);