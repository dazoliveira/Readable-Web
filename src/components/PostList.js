import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortPost } from '../actions/posts'
import Post from './Post'

class PostList extends Component {

    sortBy = () => {
        this.props.dispatch(sortPost())
    }

    render() {
        const { all, posts } = this.props

        return (
            <div className='center'>
                {all
                ?<h3>Time Line</h3>
                :<div className='category'>Category:<strong> {this.props.category}</strong></div>
                }
                <div>
                    <button onClick={this.sortBy}>Sort by Score</button>
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
                                disable={v.deleted}
                                body={v.body}
                                detail={false}
                            />
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ posts, categories }, props) => {
const { category } = props.match.params || ''
    return {
        category,
        posts
    }
}

export default connect(mapStateToProps)(PostList)