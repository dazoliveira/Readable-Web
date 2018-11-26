import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handlePostsCat } from '../actions/shared'

class Categories extends Component {

    changeCategories = (name) => {
        this.props.dispatch(handlePostsCat(name))
    }

    render() {

        const { categories } = this.props

        return (
            <div className='right'>
                <h4>Categories</h4>
                <ul className='dashboard-list'>
                    {categories.map((cat, i) => (
                        <li key={cat.name}>
                            <Link to={`/${cat.name}`}
                                onClick={() => this.changeCategories(cat.name)}
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ categories }) => {
    return {
        categories
    }
}

export default connect(mapStateToProps)(Categories)