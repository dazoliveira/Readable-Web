import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handlePosts } from '../actions/shared';
import Post from './Post'

class PostList extends Component {

    state = {
        posts: [],

    }

    componentWillReceiveProps(nextProps) {
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
        const { all } = this.props
        console.log('LOG -->', this.props.posts, ' - ', all, ' - ', posts)
        // make this on father
        return (
            <div className='center'>
                {all
                ?<h3>Time Line</h3>
                :<div className='category'>Category:<strong> {this.props.category}</strong></div>
                }
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
    const postsCat = posts.filter(p => p.category === category && props.all === true)
    return {
        category: category,
        posts: postsCat.length > 0 || posts
    }
}

export default connect(mapStateToProps)(PostList)