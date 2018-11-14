import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
                        <NavLink to={`/${cat.name}`}
                            exact activeClassName='active'
                            onClick={() => this.changeCategories(cat.name)}>
                            {cat.name}
                        </NavLink>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return {
        categories
    }
}

export default connect(mapStateToProps)(Categories)