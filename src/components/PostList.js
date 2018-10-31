import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { sortPostByDate, sortPostByScore } from '../actions/posts'

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

    sortByDate = () => {
        const { posts } = this.state
        const sorting = posts.sort((a, b) => b.timestamp - a.timestamp)
        this.props.sortingPostsByDate(sorting)
    }

    sortByScore = () => {
        const { posts } = this.state
        const sorting = posts.sort((a, b) => b.voteScore - a.voteScore)
        this.props.sortingPostsByScore(sorting)
    }

    render() {
        const { posts } = this.props

        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    Srot by:
                    <button onClick={this.sortByDate}>Date</button>
                    <button onClick={this.sortByScore}>Score</button>
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
     sortingPostsByDate: payload => dispatch(sortPostByDate(payload)),
     sortingPostsByScore: payload => dispatch(sortPostByScore(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)