import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePosts, handleCategories } from './actions/shared'
import Dashboard from './components/Dashboard'

class App extends Component {

  state={
    categories: {}
  }

  componentDidMount(){
    this.props.dispatch(handlePosts())
    this.props.dispatch(handleCategories())
  }

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
