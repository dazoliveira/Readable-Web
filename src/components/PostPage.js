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
        const { post, posts, comments } = this.props
        const postVoted = post.map(i => posts[i])

        console.log('NEW LOG -> ', comments)

        return (
            <div>
                <h4 className='center'>Pos Page Details</h4>
                <div>
                    <h5 className='center'>Post</h5>
                    {postVoted.map(v =>
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
    const post = Object.keys(posts).filter(post => posts[post].id === id)
    return {
        id,
        post,
        posts,
        comments
    }
}

export default connect(mapStateToProps)(PostPage)