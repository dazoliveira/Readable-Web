import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { sortPostByDate } from '../actions/posts'

class PostList extends Component {

    state = {
        postsSortByDate: [],
        postsSortByScore: [],
        order: '',
        posts: []
    }

    componentWillReceiveProps(nextProps) {
        let sortByDate = []
        let sortByScore = []
        if (nextProps.posts) {
            sortByDate = Object.keys(nextProps.posts).sort((a, b) => nextProps.posts[b].timestamp - nextProps.posts[a].timestamp)
            this.setState({ postsSortByDate: sortByDate })

            sortByScore = Object.keys(nextProps.posts).sort((a, b) => nextProps.posts[b].voteScore - nextProps.posts[a].voteScore)
            this.setState({ postsSortByScore: sortByScore })
        }
    }


    sortByDate = () => {
        // const sort = this.state.postsSortByDate.map((v, i) => this.props.posts[i])
        // console.log('LOG Date-> ', sort )
        // this.setState({ posts: sort, order: 'date' })
        // console.log('Check Posts -> ', this.state.posts)
        this.setState({ order: 'date' })
    }

    sortByScore = () => {
        // const sort = this.state.postsSortByScore.map((v, i) => this.props.posts[i])
        // console.log('LOG Score-> ', sort )
        // this.setState({ posts: sort, order: 'score' })
        //do something to order by Score
        this.setState({ order: 'score' })
    }

    render() {
        const { posts } = this.props


        const orderTest = (this.state.posts).map((post, i) => (
            <li key={post.id}>
                <Post
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    commentCount={post.commentCount}
                    voteScore={post.voteScore}
                    timestamp={post.timestamp}
                />
            </li>))

        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    Srot by:
                    {/* <button onClick={({ posts }) => this.sortByDate(posts)}>Date</button> */}
                    <button onClick={this.sortByDate}>Date</button>
                    <button onClick={this.sortByScore}>Score</button>
                </div>
                <ul className='dashboard-list'>
                    {this.state.order === 'score' &&
                        this.state.postsSortByScore.map((v) => (
                            <li key={v}>
                                <Post
                                    author={posts[v].author}
                                    title={posts[v].title}
                                />
                            </li>
                        ))}

                    {this.state.order === 'date' &&
                        this.state.postsSortByDate.map((v) => (
                            <li key={v}>
                                <Post
                                    author={posts[v].author}
                                    title={posts[v].title}
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