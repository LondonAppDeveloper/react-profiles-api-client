import React, { Component } from 'react';

import { LoginForm } from '../components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="Login">
        <LoginForm
          onSubmit={}
        />
      </div>
    );
  }
}

export default Login;
