import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPosts } from '../actions/shared'
import { newId, dateTime } from '../utils/helpers'

class NewPost extends Component {
    state = {
        fochus: false,
        post: {
            id: '',
            timestamp: '',
            title: '',
            body: '',
            author: '',
            category: '',
        }
    }

    componentWillMount() {
        const timestamp = dateTime()
        const id = newId()
        this.setState((prevState) => ({
            post: {
                ...prevState.post,
                id,
                timestamp
            }
        }))
    }

    handleChangeTitle = (e) => {
        const text = e.target.value
        let post = ({ ...this.state.post })
        post.title = text
        this.setState({ post, fochus: true })
    }

    handleChangeBody = (e) => {
        const text = e.target.value
        let post = ({ ...this.state.post })
        post.body = text
        this.setState({ post })
    }

    handleChangeAuthor = (e) => {
        const text = e.target.value
        let post = ({ ...this.state.post })
        post.author = text
        this.setState({ post })
    }

    handleChangeCategory = (e) => {
        const text = e.target.value
        let post = ({ ...this.state.post })
        post.category = text
        this.setState({ post })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { post } = this.state
        dispatch(addPosts(post))
    }

    render() {
        // title, body, author,
        const { title, body, author, category } = this.state.post

        return (
            <div>
                <h4 className='center'>Compose New Post</h4>
                <form className='new-post' onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Title..."
                        className='input-field'
                        value={title}
                        onChange={this.handleChangeTitle}
                    />
                    <textarea
                        placeholder="Message..."
                        className='textarea'
                        value={body}
                        onChange={this.handleChangeBody}
                    />
                    <input
                        placeholder="Author..."
                        className='input-field'
                        value={author}
                        onChange={this.handleChangeAuthor}
                    />
                    <h5 className='center'>Select Category:</h5>
                    <select className='select-field' value={category} onChange={this.handleChangeCategory}>
                        <option value="react">React</option>
                        <option value="redux">Redux</option>
                        <option value="udacity">Udacity</option>
                    </select>
                    <button className='btn' type='submit' >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewPost)