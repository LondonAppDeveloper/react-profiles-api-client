import React, { Component } from 'react';
import axios from 'axios';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'profile': {},
      'feedItems': []
    }
    console.log(props.token);
  }

  getFeed() {
    let fullToken = 'Token ' + this.props.token;
    axios.get(
      'http://127.0.0.1:8000/api/feed/'
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    this.getFeed();
    return (
      <div>
        <h1>Home</h1>
        <h2>Feed Items</h2>
      </div>
    );
  }

}

export default HomePage;
