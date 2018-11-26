import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostComments } from '../actions/shared'
import Post from './Post'
import Comment from './Comment'
import NewComment from './NewComment'


class PostPage extends Component {

    state = {
        addComment: false
    }

    componentDidMount() {
        this.props.dispatch(handlePostComments(this.props.match.params.post_id))
    }

    addComment(e, id) {
        e.preventDefault()
        this.setState({ addComment: true })
    }

    frmBlinde(value) {
        this.setState({ addComment: value })
    }

    receiveEdit = () => {
        this.props.dispatch(handlePostComments(this.props.match.params.post_id))
    }

    render() {
        const { post, comments } = this.props
        const { post_id } = this.props.match.params

        if (!post) {
            return (
                <h3 className='center'>
                    Page 404 (the post was not found)! Please try again later or diferent URL
                </h3>
            )
        }

        return (
            <div className='center-post'>
                <h4>Post Page Details</h4>
                <div>
                    <h5 className='center'>Post</h5>
                    {post && (
                        <Post key={post.id}
                            author={post.author}
                            title={post.title}
                            voteScore={post.voteScore}
                            commentCount={post.commentCount}
                            body={post.body}
                            id={post.id}
                            disable={post.deleted}
                            detail={true}
                        />
                    )}
                </div>
                <div>
                    <h5 className='center'>Comments <button onClick={(e) => this.addComment(e, post_id)}>add.</button></h5>
                    {this.state.addComment && (
                        <NewComment
                            hideFrm={(value) => this.frmBlinde(value)}
                            parentId={post_id}
                        />
                    )}
                    {comments.map(v =>
                        <Comment key={v.id}
                            author={v.author}
                            voteScore={v.voteScore}
                            body={v.body}
                            id={v.id}
                            disable={v.deleted}
                            sendEdition={this.receiveEdit}
                        />
                    )}
                </div>
            </div >
        )
    }
}

const mapStateToProps = ({ posts, comments }, { match }) => ({
    post: posts ? posts.find(p => p.id === match.params.post_id) : {},
    comments,
});

export default connect(mapStateToProps)(PostPage)