import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'mark@winterbottom.me',
      password: 'Awesome1',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({errors: {}});

    let data = {
      username: this.state.email,
      password: this.state.password
    };

    axios.post(
      'http://127.0.0.1:8000/api/login/',
      data
    )
      .then((res) => console.log(res))
      .catch((err) => this.setState({errors: err.response.data}));
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm
          onSubmit={this.handleSubmit}
          onEmailChange={(email) => this.setState({email: email})}
          onPasswordChange={(password) => this.setState({password: password})}
          emailText={this.state.email}
          passwordText={this.state.password}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default LoginPage;
