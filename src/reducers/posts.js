import {
    RECEIVE_POSTS,
    ADD_POST,
    UPDATE_VOTE_SCORE,
    POSTS_PER_CATEGORIES,
    SORT_POST_BY_VOTES
} from '../actions/posts'

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case POSTS_PER_CATEGORIES:
            return action.posts
        case SORT_POST_BY_VOTES:
            const result = state.sort((a, b) => b.voteScore - a.voteScore)
            return [ ...result]
        case UPDATE_VOTE_SCORE:
            return state.map((item) => {
                if (item.id === action.post.id) {
                    return {
                        ...item,
                        ...action.post,
                    }
                }
                return item
            })
        case ADD_POST:
            return state.concat(action.post)
        default:
            return state
    }
}