import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import LoginPage from '../containers/LoginPage';
import RegPage from '../containers/RegPage';
import HomePage from '../containers/HomePage';



class App extends Component {
  constructor(props) {
    super(props);
    let authToken = localStorage.getItem('token');
    this.state = {
      authToken: authToken
    };
  }

  setAuthToken(token) {
    this.setState({'authToken': token});
    localStorage.setItem('token', token);
  }

  render() {
    const loggedIn = this.state.authToken != null;
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
              {
                loggedIn ? (
                  <Menu.Menu position="right">
                    <Menu.Item as={NavLink} to='/logout' name="logout">
                      Logout
                    </Menu.Item>
                  </Menu.Menu>
                ) : (
                  <Menu.Menu position="right">
                    <Menu.Item as={NavLink} to='/login' name="Login">
                      Login
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/register' name='Register'>
                      Register
                    </Menu.Item>
                  </Menu.Menu>
                )
              }
          </Menu>
          <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            )
          )} />

          <Route path='/home' render={(props) => (
            <HomePage {...props} token={this.state.authToken} />
          )}/>
          <Route path="/login" render={(props) => (
            <LoginPage
              {...props}
              setAuthToken={(token) => this.setAuthToken(token)}
            />
          )}/>
          <Route path='/register' component={RegPage} />
        </div>
      </Router>
    );
  }
}

export default App;
