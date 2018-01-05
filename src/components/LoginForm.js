import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Message } from 'semantic-ui-react';


const LoginForm = (props) => {
  return (
    <div>
      <Form
        onSubmit={(e) => props.onSubmit(e)} error={props.errors !== undefined}
        loading={props.loading}
      >
        <Form.Field>
          <Form.Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={props.emailText}
            onChange={(e) => props.onEmailChange(e.target.value)}
            error={props.errors.username !== undefined}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            value={props.passwordText}
            onChange={(e) => props.onPasswordChange(e.target.value)}
            error={props.errors.password !== undefined}
          />
        </Form.Field>
        <Message
          error
          list={props.errors.non_field_errors}
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  password: PropTypes.string,
  email: PropTypes.string,
  loading: PropTypes.bool
};

export default LoginForm;
