import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI'

class App extends Component {

  state={
    help: ''
  }

  componentDidMount(){
    ReadableAPI.get().then((help) => {
      this.setState({ help: help })
    })
  }

  render() {

    console.log('SERÁ LOG?', this.state.help)

    return (
      <div className="container">
        <h3>Reads Started</h3>
      </div>
    );
  }
}

export default App;
