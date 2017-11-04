import React, { Component } from 'react';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.props.onEmailChange(e.target.value);
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
        <form onSubmit={this.handleSubmit} method="post">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={this.props.emailText}
            onChange={this.handleEmailChange}
          /> <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.passwordText}
            onChange={this.handlePasswordChange}
          /><br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}


// const LoginForm = (props) => (
//   <div>
//     <form onSubmit={props.onSubmit} method="post">
//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address"
//         onChange={props.onEmailChange}
//       /> <br />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={props.onPasswordChange}
//       /><br />
//       <input type="submit" value="Login" />
//     </form>
//   </div>
// );

export default LoginForm;
