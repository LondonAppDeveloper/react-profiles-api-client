import React, { Component } from 'react';
import axios from 'axios';

import FeedList from '../components/FeedList';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'profile': {},
      'feedItems': []
    }
    console.log(props.token);
    this.getFeed();
  }

  getFeed() {
    let fullToken = 'Token ' + this.props.token;
    axios.get(
      'http://127.0.0.1:8000/api/feed/',
      {headers: { Authorization: fullToken }}
    )
      .then((res) => {
        console.log(res);
        this.setState({feedItems: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Feed Items</h2>
        <FeedList items={this.state.feedItems} />
      </div>
    );
  }

}

export default HomePage;
