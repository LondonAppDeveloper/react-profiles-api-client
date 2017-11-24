import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import LoginPage from '../containers/LoginPage';
import RegPage from '../containers/RegPage';

import HomePage from '../components/HomePage';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: null
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
          <Route path="/login" render={(props) => (
            <LoginPage
              {...props}
              setAuthToken={(token) => this.setState({authToken: token})}
            />
          )}/>
          <Route path='/register' component={RegPage} />
        </div>
      </Router>
    );
  }
}

export default App;
