import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { sortPosts } from '../actions/posts'

class PostList extends Component {

    state = {
        postsSortByDate: [],
        postsSortByScore: [],
        order: '',
        posts: []
    }

    componentDidMount() {
        this.setState({ post: this.props.posts })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.posts) {
            this.setState({ posts: nextProps.posts })
        }
    }

    sort = () => {
        const { posts } = this.state
        const sorting = posts.sort((a, b) => b.voteScore - a.voteScore)
        this.props.handleSortPosts(sorting)
    }

    render() {
        const { posts } = this.props

        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    <button onClick={this.sort}>Sort by Score</button>
                </div>
                <ul className='dashboard-list'>
                    {posts.map((v, i) => (
                            <li key={i}>
                                <Post
                                    author={v.author}
                                    title={v.title}
                                    voteScore={v.voteScore}
                                    commentCount={v.commentCount}
                                    id={v.id}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { posts } = state
    const postsArry = Object.keys(posts).map(i => posts[i])
    return {
        posts: postsArry
    }
}

const mapDispatchToProps = dispatch => ({
     handleSortPosts: payload => dispatch(sortPosts(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)