import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Routes from './Routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'IsAuthenticated': false
    }
  }
  render() {
    return (
      <div className="App">
        <Menu stackable>
          <Menu.Item header>BYOB Client</Menu.Item>
          <Menu.Item as={NavLink} to="/" name="Home" exact>
            Home
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to="/login" name="login">
              Login
            </Menu.Item>
            <Menu.Item as={NavLink} to="/register" name="register">
              Register
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Routes />
      </div>
    );
  }
}

export default App;
