import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import LoginPage from '../containers/LoginPage';
import HomePage from '../components/HomePage';
import RegistrationPage from '../components/RegistrationPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: ''
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu stackable>
            <Menu.Item>
              <strong>Profiles Client</strong>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/'
              name='Home'
              exact
            >
              Home
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/login'
              name="Login"
            >
              Login
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/register'
              name='Register'
            >
              Register
            </Menu.Item>
          </Menu>
          <Route exact path='/' component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
        </div>
      </Router>
    );
  }
}

export default App;
