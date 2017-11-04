import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //console.log(this.state);
    console.log('Hello');
    e.preventDefault();
    console.log(this.state)
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
