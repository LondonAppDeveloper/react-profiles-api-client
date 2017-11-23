import React, { Component } from 'react';

import { Form, Button, Message } from 'semantic-ui-react';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.props.onUsernameChange(e.target.value);
  }

  handlePasswordChange(e) {
    this.props.onPasswordChange(e.target.value);
  }

  handleSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} error={this.props.errors !== undefined}>
          <Form.Field>
            <Form.Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.props.usernameText}
              onChange={this.handleUsernameChange}
              error={this.props.errors.username !== undefined}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.props.passwordText}
              onChange={this.handlePasswordChange}
              error={this.props.errors.password !== undefined}
            />
          </Form.Field>
          <Message
            error
            list={this.props.errors.non_field_errors}
          />
          <Button type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm;
