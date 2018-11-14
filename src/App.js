import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handlePosts, handleCategories } from './actions/shared';
import PostList from './components/PostList';
import Categories from './components/Cotegories';
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
      <Router>
        <div className='container'>
          <Nav />
          <Categories />
          <div>
            <Route path='/' exact component={PostList} />
            <Route path="/new" exact component={NewPost} />
            {/* <Route path='/:category' exact component={PostList}/> */}
            {/* <Route path='/:category/:post_id' exact component={PostPage} />  */}
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

