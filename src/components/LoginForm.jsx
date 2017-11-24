import React, { Component } from 'react';

import { Form, Button, Message } from 'semantic-ui-react';


class LoginForm extends Component {

  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.props.onSubmit(e)} error={this.props.errors !== undefined}>
          <Form.Field>
            <Form.Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.props.usernameText}
              onChange={(e) => this.props.onUsernameChange(e.target.value)}
              error={this.props.errors.username !== undefined}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.props.passwordText}
              onChange={(e) => this.props.onPasswordChange(e.target.value)}
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
