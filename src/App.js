import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav'
import NewPost from './components/NewPost'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handlePosts())
    this.props.dispatch(handleCategories())
  }

  render() {
    return (
      <div className='container'>
        <Nav />
        <Sidebar />
        {/* <PostList /> */}
        <NewPost />
      </div>
    );
  }
}

export default connect()(App);
