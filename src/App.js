import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI'

class App extends Component {

  state={
    post: {}
  }

  componentDidMount(){
    ReadableAPI.getAll().then((post) => {
      this.setState({ post: post })
    })
  }

  render() {
    console.log('LOG -> ', this.state.post)

    return (
      <div className="container">
        <h3>Reads Started</h3>
      </div>
    );
  }
}

export default App;
