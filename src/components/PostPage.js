import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostComments } from '../actions/shared'
import Post from './Post'
import Comment from './Comment'

class PostPage extends Component {

    componentDidMount() {
        const { id } = this.props
        this.props.dispatch(handlePostComments(id))
    }

    render() {
        const { post, comments } = this.props
        console.log('LOG -> ', post)

        return (
            <div>
                <h4 className='center'>Pos Page Details</h4>
                <div>
                    <h5 className='center'>Post</h5>
                    {post.map(v =>
                        <Post key={v.id}
                            author={v.author}
                            title={v.title}
                            voteScore={v.voteScore}
                            commentCount={v.commentCount}
                            body={v.body}
                            id={v.id}
                        />
                    )}
                    <h5 className='center'>Comments</h5>
                    {comments.map(v =>
                        <Comment key={v.id}
                            author={v.author}
                            voteScore={v.voteScore}
                            body={v.body}
                            id={v.id}
                        />
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts, comments }, props) {
    const { id } = props.match.params
    const post = posts.filter(p => p.id === id)
    return {
        id,
        post,
        comments
    }
}

export default connect(mapStateToProps)(PostPage)