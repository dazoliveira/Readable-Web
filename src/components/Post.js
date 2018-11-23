import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, deletePost, handlePostComments } from '../actions/shared'
import EditPost from './EditPost'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Post extends Component {

    state = {
        editView: false
    }

    toggleVote(e, id, option) {
        e.preventDefault()
        this.props.dispatch(votePost(id, option))
    }

    remove(e, id) {
        e.preventDefault()
        this.props.dispatch(deletePost(id))
    }

    editPost(e) {
        e.preventDefault()
        this.setState({ editView: true })
    }

    onCloseEditView() {
        this.setState({ editView: false })
    }

    render() {
        const { id, author, title, commentCount, voteScore, disable, body } = this.props

        if (disable === true) {
            return ''
        }

        return (
            <div className='post'>
                {this.state.editView
                    ? <EditPost
                        onClose={(e) => this.onCloseEditView(e)}
                        id={id}
                        title={title}
                        body={body}
                    />
                    : <div className='post-info'>
                        <span>Title: {title}</span>
                        <span>Author: {author}</span>
                        {this.props.detail &&
                            <span>Body: {body}</span>}
                        <div className='post-icons'>
                            <span>{`Comments: ${commentCount}`}</span>
                            <span>{`Votes: ${voteScore}`}</span>
                            <button onClick={(e) => this.toggleVote(e, id, 'upVote')}>Up</button>
                            <button onClick={(e) => this.toggleVote(e, id, 'downVote')}>Down</button>
                            <button onClick={(e) => this.editPost(e)}>Edit</button>
                            <button onClick={(e) => this.remove(e, id)}>Remove</button>
                        </div>
                    </div>
                }

            </div>
        )
    }
}


export default connect()(Post)