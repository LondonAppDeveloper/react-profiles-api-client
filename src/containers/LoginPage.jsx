import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {

  handleSubmit(e) {
    console.log('Hello');
    e.preventDefault();
  }

  handleFieldChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <LoginForm
          onSubmit={this.handleSubmit}
          onFieldChange={this.handleFieldChange}
        />
      </div>
    );
  }
}

export default LoginPage;
