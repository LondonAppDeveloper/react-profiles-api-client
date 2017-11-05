import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'mark@winterbottom.me',
      password: 'Awesome1'
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
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
    }).catch(function(res) {
      console.log('Failure! ', res);
    });
  }

  handleEmailChange(email) {
    this.setState({email: email});
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
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          emailText={this.state.email}
          passwordText={this.state.password}
        />
      </div>
    );
  }
}

export default LoginPage;
