import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handlePosts } from '../actions/shared'

class Nav extends Component {
    onLoadPosts(){
        this.props.dispatch(handlePosts())
    }
    render(){
        return(
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' onClick={() => this.onLoadPosts()}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/new'>
                        New Post
                    </Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default connect()(Nav)