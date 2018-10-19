import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostList extends Component {
    render() {
        const { posts } = this.props

        return (
            <div className='center'>
                <h3>Time Line</h3>
                <ul className='dashboard-list'>
                    {posts.map((post, i) => (
                        <li key={post.id}>
                            {post.id}
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

export default connect(mapStateToProps)(PostList)