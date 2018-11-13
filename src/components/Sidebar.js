import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

    render() {

        const { categories } = this.props

        return (
            <div className='right'>
                <h4>Categories</h4>
                <ul className='dashboard-list'>
                    {categories.map((cat, i) => (
                        <li key={cat.name}>
                        <NavLink to={`/${cat.name}`} exact activeClassName='active'>
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

const mapStateToProps = (state) => {
    const { categories } = state
    const catArry = Object.keys(categories).map(i => categories[i])
    return {
        categories: catArry
    }
}

export default connect(mapStateToProps)(Sidebar)