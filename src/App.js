import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Categories from './components/Cotegories';
import Nav from './components/Nav'
import NewPost from './components/NewPost'
import PosPerCat from './components/PostPerCat'
import PostPage from './components/PostPage';
import NotFound from './components/NotFound';

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
          <Categories />
          <div>
            <Route
              path='/'
              exact
              render={(props) => <PostList {...props} all={true} />}
            />
            <Route
              path='/new'
              exact
              component={NewPost}
            />
            <Route
              path='/:category'
              exact
              render={(props) => <PosPerCat {...props} all={false} />}
            />
            <Route
              path='/:category/:post_id'
              exact
              component={PostPage}
            />
            <Route
              path='/404'
              exact
              component={NotFound}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

