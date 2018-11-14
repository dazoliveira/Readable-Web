import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav'
import NewPost from './components/NewPost';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handlePosts())
    this.props.dispatch(handleCategories())
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Sidebar />
          <div>
            <Route path='/' exact component={PostList} />
            <Route path='/:category' component={PostList}/>
            <Route path='/:category/:post_id' exact component={PostList} />
            <Route path='/new' exact component={NewPost} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

