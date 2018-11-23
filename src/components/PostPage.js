import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handlePostComments } from '../actions/shared'
import Post from './Post'
import Comment from './Comment'
import NewComment from './NewComment'
import NotFound from './NotFound';

class PostPage extends Component {

    state = {
        addComment: false
    }

    componentDidMount() {
        const { id } = this.props
        this.props.dispatch(handlePostComments(id))
    }

    addComment(e, id) {
        e.preventDefault()
        this.setState({ addComment: true })
    }

    frmBlinde(value){
        this.setState({ addComment: value })
    }

    render() {
        const { post, comments, id } = this.props

        return (
            <div>
                <h4 className='center'>Post Page Details</h4>
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
                            disable={v.deleted}
                            detail={true}
                        />
                    )
                    }
                </div>
                <div>
                    <h5 className='center'>Comments <button onClick={(e) => this.addComment(e, id)}>add.</button></h5>
                    {this.state.addComment && (
                            <NewComment 
                                hideFrm={(value) => this.frmBlinde(value)}
                                parentId={id}
                            />
                    )}
                    {comments.map(v =>
                        <Comment key={v.id}
                            author={v.author}
                            voteScore={v.voteScore}
                            body={v.body}
                            id={v.id}
                            disable={v.deleted}
                        />
                    )}
                </div>
            </div >
        )
    }
}

function mapStateToProps({ posts, comments }, props) {
    const { post_id } = props.match.params
    const post = posts.filter(p => p.id === post_id)

    return {
        post,
        comments,
        id: post_id
    }
}

export default connect(mapStateToProps)(PostPage)