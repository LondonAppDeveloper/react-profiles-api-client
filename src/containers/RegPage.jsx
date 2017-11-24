import React, { Component } from 'react';
import axios from 'axios';

import RegForm from '../components/RegForm';


class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mark Winterbottom',
      email: 'mark@winterbottom.me',
      password: 'Awesome1',
      password2: 'Awesome1',
      errors: {},
      loading: false
    }
    this.register = this.register.bind(this);
    this.successMessage = null;
  }

  register(e) {
    e.preventDefault();
    this.setState({errors: {}});

    if (this.state.password !== this.state.password2) {
      this.setState(
        {
          errors: {
            password2: ['Passwords do not match'],
            password: []
          }
        }
      );
      return;
    }

    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }

    this.setState({loading: true});
    axios.post(
      'http://127.0.0.1:8000/api/profile/',
      data
    )
      .then((res) => {
        this.setState({successMessage: 'Registration Successful.'});
        this.setState({loading: false});
      })
      .catch((err) => {
        this.setState({errors: err.response.data});
        console.log(err.response.data);
        this.setState({loading: false});
      });
  }

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <RegForm
          onSubmit={this.register}
          onNameChange={(full_name) => this.setState({name: full_name})}
          onEmailChange={(email) => this.setState({email: email})}
          onPasswordChange={(password) => this.setState({password: password})}
          onPassword2Change={(password) => this.setState({password2: password})}
          nameText={this.state.name}
          emailText={this.state.email}
          passwordText={this.state.password}
          password2Text={this.state.password2}
          errors={this.state.errors}
          successMessage={this.state.successMessage}
          loading={this.state.loading}
        />
      </div>
    )
  }

}

export default RegistrationPage;
