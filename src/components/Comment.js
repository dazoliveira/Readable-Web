import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteComment } from '../actions/shared'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Comment extends Component {

    toggleVote(e, id, option) {
        e.preventDefault()
        this.props.dispatch(voteComment(id, option))
    }

    render() {
        const { id, author, voteScore, body } = this.props

        if (id === null) {
            return (
                <p>No posts was found</p>
            )
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
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Comment)