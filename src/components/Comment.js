import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteComment, deleteComment } from '../actions/shared'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Comment extends Component {

    toggleVote(e, id, option) {
        e.preventDefault()
        this.props.dispatch(voteComment(id, option))
    }

    remove(e, id){
        e.preventDefault()
        this.props.dispatch(deleteComment(id))
    }

    render() {
        const { id, author, voteScore, body, disable } = this.props

        if (disable === true) {
            return ''
        }

        return (
            <div className='comment'>
                <div className='comment-info'>
                    <span>Author: {author}</span>
                    <span>{body}</span>
                    <div className='comment-icons'>
                        <span>{`Votes: ${voteScore}`}</span>
                        <button onClick={(e) => this.toggleVote(e, id, 'upVote')}>Up</button>
                        <button onClick={(e) => this.toggleVote(e, id, 'downVote')}>Down</button>
                        <button onClick={this.editPost}>Edit</button>
                        <button onClick={(e) => this.remove(e, id)}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Comment)