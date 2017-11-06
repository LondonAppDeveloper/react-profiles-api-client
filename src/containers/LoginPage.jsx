import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'mark@winterbottom.me',
      password: 'Awesome1'
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(
      'http://127.0.0.1:8080/api/login/',
      this.state
    ).then(function(res) {
      console.log('Success! ', res);
    }).catch(function(err) {
      console.log(err.response);
    });
  }

  handleUsernameChange(username) {
    this.setState({username: username});
  }

  handlePasswordChange(password) {
    this.setState({password: password});
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <LoginForm
          onSubmit={this.handleSubmit}
          onUsernameChange={this.handleUsernameChange}
          onPasswordChange={this.handlePasswordChange}
          usernameText={this.state.username}
          passwordText={this.state.password}
        />
      </div>
    );
  }
}

export default LoginPage;
