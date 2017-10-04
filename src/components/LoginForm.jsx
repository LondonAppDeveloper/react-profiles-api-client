import React from 'react';


const LoginForm = (props) => (
  <div>
    <form onSubmit={props.onSubmit} method="post">
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={props.onFieldChange}
      /> <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={props.onFieldChange}
      /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
);

export default LoginForm;
