import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = (props) => {
    return(
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'> Home</NavLink>
                </li>
                <li>
                    <NavLink to='/new' exact activeClassName='active'> New Post</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default nav