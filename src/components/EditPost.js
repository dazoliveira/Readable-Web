import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions/shared'

class EditPost extends Component {
    state = {
        post: {
            title: '',
            body: '',
        },
        fochus: false
    }

    componentWillMount(){
        const { title, body } = this.props
        this.setState((prevState) => ({
            post:{
                ...prevState.post,
                title,
                body
            }
        }))
    }

    stopEvent(e){
        e.preventDefault()
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

    returnView(e) {
        const { onClose, id, dispatch } = this.props
        const { post } = this.state
        e.preventDefault()
        onClose()
        dispatch(editPost(post, id))
    }

    render() {

        const { title, body } = this.state.post

        return (
            <div className='post'>
                <h4 className='center'>Editing...</h4>
                <form className='new-post'>
                    <input
                        onClick={(e) => this.stopEvent(e)}
                        placeholder="Title..."
                        className='input-field'
                        value={title}
                        onChange={this.handleChangeTitle}
                    />
                    <textarea
                        onClick={(e) => this.stopEvent(e)}
                        placeholder="Message..."
                        className='textarea'
                        value={body}
                        onChange={this.handleChangeBody}
                    />
                    <button className='btn' onClick={(e) => this.returnView(e)} >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(EditPost)