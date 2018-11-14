import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handlePosts } from '../actions/shared';
import Post from './Post'

class PostList extends Component {

    state = {
        posts: [],

    }
    componentDidMount(){
        this.props.dispatch(handlePosts())
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.category) {
            this.setState({ posts: nextProps.posts })
        }
        if (nextProps.posts) {
            this.setState({ posts: nextProps.posts })
        }
    }

    sort = () => {
        const { posts } = this.state
        const sorting = posts.sort((a, b) => b.voteScore - a.voteScore)
        this.setState({ posts: sorting })
    }

    render() {
        const { posts } = this.state
        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    <button onClick={this.sort}>Sort by Score</button>
                </div>
                <ul className='dashboard-list'>
                    {posts.map((v, i) => (
                        <li key={i}>
                        <Link to={`/${v.category}/${v.id}`}>
                            <Post
                                author={v.author}
                                title={v.title}
                                voteScore={v.voteScore}
                                commentCount={v.commentCount}
                                id={v.id}
                            />
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }, props) => {
    const { category } = props.match.params
    return {
        category: category,
        posts
    }
}

export default connect(mapStateToProps)(PostList)