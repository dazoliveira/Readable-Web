import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {

    render() {
        return (
            <div>
                <center>
                    <Link to="/">
                        404 (Post Not Found) Return to Home Page
                    </Link>
                </center>
            </div>
        )
    }
}
