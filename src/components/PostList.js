import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class PostList extends Component {

    state = {
        postsSortByDate: [],
        postsSortByScore: []
    }

    componentWillReceiveProps(nextProps) {
        let sortByDate = []
        let sortByScore = []
        if(nextProps.posts){
            sortByDate = Object.keys(nextProps.posts).sort((a, b) => nextProps.posts[b].timestamp - nextProps.posts[a].timestamp)
            this.setState({postsSortByDate:  sortByDate})

            sortByScore = Object.keys(nextProps.posts).sort((a, b) => nextProps.posts[b].voteScore - nextProps.posts[a].voteScore)
            this.setState({postsSortByScore:  sortByScore})
        }
        console.log(this.state.postsSortByScore)
    }


    sortByDate = (posts) => {

        // console.log('check -> ', posts)
        // posts.sort((a, b) =>  posts[a].timestamp - posts[b].timestamp)
        // this.setState({ postsSortByTimestamp:  []})
        //do somehting to order by date
    }

    sortByScore(e) {
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
                    <button onClick={({ posts }) => this.sortByDate(posts)}>Date</button>
                    <button onClick={this.sortByScore}>Score</button>
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