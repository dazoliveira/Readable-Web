import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { receivePostsPerCats } from '../actions/posts'

class Category extends Component {

        state={
            posts:[]
        }

        componentWillMount(){
            this.setState({ posts: this.props.posts })
        }

    componentWillReceiveProps(nextProps) {
        if (nextProps.posts) {
            this.setState({ posts: nextProps.posts })
        }
    }

    sort = () => {
        const { posts } = this.state
        const sorting = posts.sort((a, b) => b.voteScore - a.voteScore)
        this.setState({ posts: sorting })
    }

    render() {
        if(this.props.posts.length < 1){
            return ''
        }
        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    <button onClick={this.sort}>Sort by Score</button>
                </div>
                <ul className='dashboard-list'>
                    {this.props.posts.map((v, i) => (
                        <li key={i}>
                                <Post
                                    author={v.author}
                                    title={v.title}
                                    voteScore={v.voteScore}
                                    commentCount={v.commentCount}
                                    id={v.id}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ posts }, props) {
    const { category } = props.match.params
    const postsCat = posts.filter(post => post.category === category)
    return {
        posts: postsCat
    }
}

export default connect(mapStateToProps)(Category)
