import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'

class App extends Component {

  state={
    categories: {}
  }

  componentDidMount(){
    ReadableAPI.getAllCategories().then((categories) => {
      this.setState({ categories: categories })
    })
  }

  render() {
    console.log('LOG -> ', this.state.categories)

    return (
      <div className="container">
        <h3>Reads Started</h3>
      </div>
    );
  }
}

export default App;
