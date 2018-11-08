import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostComments } from '../actions/shared'
import Post from './Post'

class PostPage extends Component {

    componentDidMount() {
        const { id } = this.props
        this.props.dispatch(handlePostComments(id))
    }

    render() {
        const { post } = this.props
        console.log('LOG POST: ', post)
        return (
            <div>
                <h4 className='center'>Pos Page Details</h4>
                {post.map(v =>
                    <Post key={v.id}
                        author={v.author}
                        title={v.title}
                        voteScore={v.voteScore}
                        commentCount={v.commentCount}
                        id={v.id}
                    />
                )}
            </div>
        )
    }
}

function mapStateToProps({ posts }, props) {
    const { id } = props.match.params
    const post = posts.filter(post => post.id === id)
    return {
        id,
        post: post
    }
}

export default connect(mapStateToProps)(PostPage)