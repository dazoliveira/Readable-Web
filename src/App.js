import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage';
import Category from './components/Category'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handlePosts())
    this.props.dispatch(handleCategories())
    // this.props.dispatch(handleComments())
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Sidebar />
          <div>
            <Route path='/' exact component={PostList} />
            <Route path='/:category' component={Category}/>
            <Route path='/:category/:post_id' exact component={PostPage} />
            <Route path="/new" component={NewPost} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

