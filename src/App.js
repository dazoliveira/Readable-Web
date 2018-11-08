import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handlePosts())
    this.props.dispatch(handleCategories())
    // this.props.dispatch(handleComments())
  }

  render() {
    return (
      <div className='container'>
        <Nav />
        <Sidebar />
        {/* <PostList /> */}
        {/* <NewPost /> */}
        <PostPage match={{params:{ id: '8xf0y6ziyjabvozdd253nd' }}}/>
      </div>
    );
  }
}

export default connect()(App);
