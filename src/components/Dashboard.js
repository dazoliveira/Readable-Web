import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // let posts = Object.assign()
        return (
            <div>
                <div className='center'>
                    <h3>Time Line</h3>
                    <ul className='dashboard-list'>
                        {/* {this.props.posts.map((post, i) => (
                            <li>
                                {i.author}
                            </li>
                        )
                        )} */}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Dashboard)