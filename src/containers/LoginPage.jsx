import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'mark@winterbottom.me',
      password: 'Awesome1',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({errors: {}})
    axios.post(
      'http://127.0.0.1:8000/api/login/',
      this.state
    )
      .then((res) => console.log(res))
      .catch((err) => this.setState({errors: err.response.data}));
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <LoginForm
          onSubmit={this.handleSubmit}
          onUsernameChange={(username) => this.setState({username: username})}
          onPasswordChange={(password) => this.setState({password: password})}
          usernameText={this.state.username}
          passwordText={this.state.password}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default LoginPage;
