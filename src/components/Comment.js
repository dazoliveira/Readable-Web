import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { voteComment, deleteComment, editComment } from '../actions/shared'
import { dateTime } from '../utils/helpers'
// import EditComment from './EditComment'
// import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Comment extends Component {

    state = {
        editView: false,
        comment: {
            body: '',
            timestamp: ''
        }
    }

    componentWillMount() {
        const { body } = this.props
        const comment = ({...this.state.comment})
        comment.body = body
        this.setState({ comment })
    }

    toggleVote(e, id, option) {
        e.preventDefault()
        this.props.dispatch(voteComment(id, option))
    }

    remove(e, id) {
        e.preventDefault()
        this.props.dispatch(deleteComment(id))
    }

    editPost(e) {
        e.preventDefault()
        this.setState({ editView: true })
    }

    onChangeBody = (e) => {
        const body = e.target.value
        const timestamp = dateTime()
        this.setState((prevState) => ({
            comment: {
                ...prevState.comment,
                body,
                timestamp
            }
        }))
    }

    onEdit(e) {
        const { dispatch, id } = this.props
        const { comment } = this.state
        e.preventDefault()
        this.setState({ editView: false })
        dispatch(editComment(id, comment))
        this.props.sendEdition()
    }

    render() {
        const { id, author, voteScore, body, disable } = this.props
        const { editView, comment } = this.state

        if (disable === true) {
            return ''
        }

        return (
            <div className='comment'>
                <div className='comment-info'>
                    <span>Author: {author}</span>
                    {editView
                        ? <form className='new-comment' onSubmit={this.handleSubmit}>
                            <input
                                placeholder="Comment..."
                                className='input-field'
                                value={comment.body}
                                onChange={this.onChangeBody}
                            />
                            <button onClick={(e) => this.onEdit(e)}>
                                Editing...
                            </button>
                        </form>
                        : <Fragment>
                            <span>{body}</span>
                            <div className='comment-icons'>
                                <span>{`Votes: ${voteScore}`}</span>
                                <button onClick={(e) => this.toggleVote(e, id, 'upVote')}>Up</button>
                                <button onClick={(e) => this.toggleVote(e, id, 'downVote')}>Down</button>
                                <button onClick={(e) => this.editPost(e)}>Edit</button>
                                <button onClick={(e) => this.remove(e, id)}>Remove</button>
                            </div>
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default connect()(Comment)