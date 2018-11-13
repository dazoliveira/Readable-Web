import  React, { Component } from 'react'
import PostList from './PostList'

export default class Category extends Component {
    state={
        categories:[]
    }
    render(){
        console.log('URL PARAMS',  this.props.match.params)
        // if params.category iqual to props.post.category render
        return(
            <div>
                {/* <PostList /> */}
            </div>
        )
    }
}