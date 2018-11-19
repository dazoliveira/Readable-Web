import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import { sortPost } from '../actions/posts'

class PostPerCat extends Component {


    sortBy = () => {
        this.props.dispatch(sortPost())
    }

    render() {
        const { postsCat, categories, category } = this.props

        const cat = categories.filter(c => c.name === category)

        if (cat.length === 0) {
            return ''
        }

        return (
            <div className='center'>
                <div className='category'>Category:<strong> {category}</strong></div>
                <div>
                    <button onClick={this.sortBy}>Sort by Score</button>
                </div>
                <ul className='dashboard-list'>
                    {postsCat.map((v, i) => (
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
            </div>
        )
    }
}

const mapStateToProps = ({ posts, categories }, props) => {
    const { category } = props.match.params
    const postsCat = posts.filter(p => p.category === category)
    return {
        categories,
        category,
        postsCat
    }
}

export default connect(mapStateToProps)(PostPerCat)