import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newId, dateTime } from '../utils/helpers'
import { addComment } from '../actions/shared'


    class NewComment extends Component {

        state = {
            fochus: false,
            comment: {
                id: '',
                timestamp: '',
                author: '',
                body: '',
                parentId: ''
            }
        }

        componentWillMount() {
            const timestamp = dateTime()
            const id = newId()
            const parentId = this.props.parentId
            this.setState((prevState) => ({
                comment: {
                    ...prevState.comment,
                    id,
                    timestamp,
                    parentId
                }
            }))
        }

        onChangeAuthor = (e) => {
            const text = e.target.value
            let comment = ({ ...this.state.comment })
            comment.author = text
            this.setState({ comment, fochus: true })
        }

        onChangeBody = (e) => {
            const text = e.target.value
            let comment = ({ ...this.state.comment })
            comment.body = text
            this.setState({ comment, fochus: true })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            const { dispatch } = this.props
            const { comment } = this.state
            dispatch(addComment(comment))
            this.props.hideFrm(false)
        }

        render() {

            const { body, author } = this.state.comment

            return (
                <div className='comment'>
                    <h4 className='center'>Compose New Comment</h4>
                    <form className='new-comment' onSubmit={this.handleSubmit}>
                        <input
                            placeholder="Author..."
                            className='input-field'
                            value={author}
                            onChange={this.onChangeAuthor}
                        />
                        <textarea
                            placeholder="Message..."
                            className='textarea'
                            value={body}
                            onChange={this.onChangeBody}
                        />
                        <button className='btn' type='submit'>
                            Add Comment
                        </button>
                    </form>
                </div>
            )
        }
    }

export default connect()(NewComment)