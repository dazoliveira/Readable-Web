import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditComment extends Component {


    render() {
        return (
            <div className='comment'>
            {/* <h4 className='center'>Compose New Comment</h4>
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
            </form> */}
        </div>
        )
    }
}

export default connect()(EditComment)