import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, deletePost, handlePostComments } from '../actions/shared'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Post extends Component {

    toggleVote(e, id, option) {
        e.preventDefault()
        this.props.dispatch(votePost(id, option))
    }

    remove(e, id){
        e.preventDefault()
        this.props.dispatch(deletePost(id))
    }

    render() {
        const { id, author, title, commentCount, voteScore,  disable } = this.props

        if (disable === true) {
            return ''
        }

        return (
            <div className='post'>
                <div className='post-info'>
                    <span>Title: {title}</span>
                    <span>Author: {author}</span>
                    {this.props.body &&
                    <span>Body: {this.props.body}</span> }
                    <div className='post-icons'>
                        <span>{`Comments: ${commentCount}`}</span>
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


export default connect()(Post)