import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Post extends Component {
    handUp(e){
        e.preventDefault()

        // do something to add vote
    }

    hadn

    render() {
        const { id, author, title, commentCount, voteScore, timestamp } = this.props
        console.log('LOG -> ', this.props.posts)
        return (
            <div className='post'>
                <div className='post-info'>
                    <span>Title: {title}</span>
                    <span>Author: {author}</span>
                    <div className='post-icons'>
                        <span>{`Comments: ${commentCount}`}</span>
                            <span>{`Votes: ${voteScore}`}</span>
                        <button onClick={this.handUp}>Up</button>
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