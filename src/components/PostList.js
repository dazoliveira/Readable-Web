import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import Comment from './Comment'

class PostList extends Component {

    state = {
        posts: []
    }

    componentWillMount() {
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
        const { posts } = this.state
        const { paramsArr } = this.props

        console.log('LOG ->', paramsArr[0])

        return (
            <div className='center'>
                <h3>Time Line</h3>
                <div>
                    <button onClick={this.sort}>Sort by Score</button>
                </div>
                <ul className='dashboard-list'>
                    {paramsArr.length === 0 && posts.map((v, i) => (
                        <li key={i}>
                            <Link to={`/${v.category}/${v.id}`}>
                                <Post
                                    author={v.author}
                                    title={v.title}
                                    voteScore={v.voteScore}
                                    commentCount={v.commentCount}
                                    id={v.id}
                                />
                            </Link>
                        </li>
                    ))}

                    {paramsArr.length === 1 && posts.map((v, i) => (
                        v.category === paramsArr[0] &&
                        <li key={i}>
                            <Link to={`/${v.category}/${v.id}`}>
                                <Post
                                    author={v.author}
                                    title={v.title}
                                    voteScore={v.voteScore}
                                    commentCount={v.commentCount}
                                    id={v.id}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
                {
                    paramsArr.length === 2 && posts.map((v, i) => (
                        v.category === paramsArr[0] && v.id === paramsArr[1] &&
                        <div key={i}>
                            <Post
                                author={v.author}
                                title={v.title}
                                voteScore={v.voteScore}
                                commentCount={v.commentCount}
                                id={v.id}
                            />
                            <Comment id={v.id} />
                        </div>
                    ))}
            </div >
        )
    }
}

const mapStateToProps = ({ posts }, props) => {
    const { params } = props.match
    const paramsArr = Object.keys(params).map(p => params[p])
    return {
        posts,
        paramsArr
    }
}

export default connect(mapStateToProps)(PostList)