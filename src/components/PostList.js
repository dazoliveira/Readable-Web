import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class PostList extends Component {

    sortByDate(e){
        e.preventDefault()

        //do somehting to order by date
    }

    sortByScore(e){
        e.preventDefault()

        //do something to order by Score
    }

    render() {
        const { posts } = this.props

        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    Srot by:
                <button onClick={this.sortByScore}>Score</button>
                    <button onClick={this.sortByDate}>Date</button>
                </div>
                <ul className='dashboard-list'>
                    {posts.map((post, i) => (
                        <li key={post.id}>
                            <Post
                                id={post.id}
                                author={post.author}
                                title={post.title}
                                commentCount={post.commentCount}
                                voteScore={post.voteScore}
                                timestamp={post.timestamp}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { posts } = state
    const postsArry = Object.keys(posts).map(i => posts[i])
    return {
        posts: postsArry
    }
}

export default connect(mapStateToProps)(PostList)