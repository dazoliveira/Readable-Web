import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handlePosts())
    this.props.dispatch(handleCategories())
  }

  render() {
    return (
      <div className='container'>
        <Nav />
        <PostList />
        <Sidebar />
      </div>
    );
  }
}

export default connect()(App);
