import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {

    render() {

        const { categories } = this.props

        return (
            <div className='left'>
                <ul className='dashboard-list'>
                    {categories.map((cat, i) => (
                        <li key={cat.name}>
                            {cat.name}
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