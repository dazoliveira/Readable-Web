import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../actions/shared'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Post extends Component {
    handUp(e, id, option) {
        e.preventDefault()
        this.props.dispatch(votePost(id, option))
    }

    handDown(e) {
        e.preventDefault()

        // subtract vote
    }

    render() {
        const { id, author, title, commentCount, voteScore } = this.props

        if (id === null) {
            return (
                <p>No posts was found</p>
            )
        }

        return (
            <div className='post'>
                <div className='post-info'>
                    <span>Title: {title}</span>
                    <span>Author: {author}</span>
                    <div className='post-icons'>
                        <span>{`Comments: ${commentCount}`}</span>
                        <span>{`Votes: ${voteScore}`}</span>
                        <button onClick={(e) => this.handUp(e, id, 'upVote')}>Up</button>
                        <button onClick={this.handDown}>Down</button>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = ({posts}) => {
//     return{
//         pos
//     }
// }

export default connect()(Post)