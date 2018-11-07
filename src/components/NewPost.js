import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPosts } from '../actions/shared'

class NewPost extends Component {
    state = {
        text: '',
        post: {
            id: 12345,
            timestamp: '',
            title: 'Title',
            body: 'Body',
            author: 'Author',
            category: 'Category',
        }
    }

    handleChange = (e) => {
        const text = e.target.value
        const dateTime = Date.now();
        const timestamp = Math.floor(dateTime / 1000);
        let post = {...this.state.post}
        post.timestamp = timestamp
        this.setState({text, post})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text, post } = this.state
        console.log('POST LOG: ', post )
        this.props.dispatch(addPosts(post))
    }

    render() {
        const { text, post } = this.state

        return (
            <div>
                <h4 className='center'>Compose New Post</h4>
                <form className='new-post' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Title"
                        className='textarea'
                        value={text}
                        onChange={this.handleChange}
                    />
                    <button className='btn' type='submit' disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewPost)