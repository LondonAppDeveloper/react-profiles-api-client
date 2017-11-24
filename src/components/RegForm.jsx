import React from 'react';

import { Form, Message, Button } from 'semantic-ui-react';


const RegForm = (props) => {
  return (
    <div>
      <Form
        onSubmit={(e) => props.onSubmit(e)}
        success={props.successMessage !== undefined}
      >
        <Message success header={props.successMessage} />
        <Form.Field>
          <Form.Input
            type="name"
            name="name"
            placeholder="Name"
            value={props.nameText}
            onChange={(e) => props.onNameChange(e.target.value)}
            error={props.errors.name !== undefined}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type="text"
            name="email"
            placeholder="Email Address"
            value={props.emailText}
            onChange={(e) => props.onEmailChange(e.target.value)}
            error={props.errors.email !== undefined}
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
        <Form.Field>
          <Form.Input
            type="password"
            name="password2"
            placeholder="Re-enter password"
            value={props.password2Text}
            onChange={(e) => props.onPassword2Change(e.target.value)}
            error={props.errors.password2 !== undefined}
          />
        </Form.Field>
        <Message error list={props.errors.non_field_errors} />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  )
}

export default RegForm;
