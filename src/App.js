import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
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
        </Menu>
      </div>
    );
  }
}

export default App;
